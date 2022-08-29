import Button from '@mui/material/Button';

const LocalesButton = ({onLocaleClick, lan}) => {
    return <Button variant="variant" color="inherit" size="large" onClick={onLocaleClick}>{lan === 'en' ? '中文' : 'English'}</Button>
}

export default LocalesButton