import Typography from '@mui/material/Typography';
import intro from '../../constants/introduction/introduction'

const Introduction = ({lan}) => {
    return <Typography gutterBottom variant="h5" component="h2" align='center' className='mx-5'>
    <section>{intro[lan]}</section>
  </Typography>
}

export default Introduction