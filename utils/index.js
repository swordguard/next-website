import axios from 'axios'
import { FEEDBACK_ENDPOINT } from '../constants/constants'
import validationFormCopy from '../constants/form/validation'

export const onFirstNameChange = (e, setFirstName) => {
    setFirstName(e.target.value)
}

export const onFirstNameBlur = (formData, formErrors, setFormErrors) => {
    validateForm({formData, formErrors, setFormErrors})
}

export const onLastNameChange = (e, setFirstName) => {
    setFirstName(e.target.value)
}

export const onEmailChange = (e, setFirstName) => {
    setFirstName(e.target.value)
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

export const onCommentsChange = (e, setFirstName) => {
    setFirstName(e.target.value)
}

export const handleSubmit = (formData, setToastOpen, setSubmitSuccess, 
    setPosting, {formErrors, setFormErrors, lan},
    setValidationMsg, e) => {
       if(!validateForm({formData, formErrors, setFormErrors, lan})) {
        return
       }
  e.preventDefault()
    setPosting(true)
  axios.post(FEEDBACK_ENDPOINT, formData)
  .then(() => {
      setPosting(false)
      setToastOpen(true)
      setSubmitSuccess(true)
  })
  .catch((err) => {
      setPosting(false)
      setToastOpen(true)
      setSubmitSuccess(false)
      setValidationMsg(err.response.data)
  })
}

export const validateForm = ({formData, formErrors, setFormErrors, lan}) => {
    const newErrors = Object.keys(formData).reduce((accu, curr) => {
        let newError
        const value = formData[curr]
        if (value.trim().length === 0) {
            newError = {
                [curr]: validationFormCopy[curr][lan]
            }
        } else {
            delete formErrors[curr]
        }
        
        if (curr === 'email') {
            if (!validateEmail(value.trim())) {
                newError = {
                    [curr]: validationFormCopy[curr][lan]
                }
                
            }
        }

        return {
            ...accu,
            ...newError
        }
    }, {})

    if (newErrors && Object.values(newErrors)?.length) {
        setFormErrors(newErrors)
        return false
    }

    setFormErrors({})
    return true;
}