import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import Grid from '@mui/material/Grid';
import MSForm from '../MSForm/MSForm'
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Introduction from '../Introduction/introduction'
import Copyright from '../Copyright/Copyright'
import LocalesButton from '../LocalesButton/LocalesButton'
import cards from '../../constants/cards/cards'
import appbar from '../../constants/appbar/appbar'

const theme = createTheme();

const HomePage = () => {
    const [lan, setLan] = useState('en')

    const onLocaleClick = () => {
        setLan(lan === 'en' ? 'cn' : 'en')
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <HighQualityIcon sx={{ mr: 2 }} />
                        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                            {appbar.motto[lan]}
                        </Typography>
                        <LocalesButton onLocaleClick={onLocaleClick} lan={lan}/>
                    </Toolbar>
                </AppBar>
            </Box>
            
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Introduction lan={lan}/>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map(({id, image,heading, content}) => (
                        <Grid item key={id} xs={12} sm={6} md={4}>
                            <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                            <CardMedia
                                component="img"
                                sx={{
                                // 16:9
                                // pt: '56.25%',
                                }}
                                image={image}
                                alt="random"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                {heading[lan]}
                                </Typography>
                                <Typography>
                                {content[lan]}
                                </Typography>
                            </CardContent>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
                <MSForm lan={lan}/>
            </main>
            <footer>
                <Box sx={{ bgcolor: 'background.red', p: 6 }} component="footer">
                    <Copyright sx={{ mt: 8, mb: 4 }} lan={lan}/>
                </Box>
            </footer>  
        </ThemeProvider>
    )
}

export default HomePage;