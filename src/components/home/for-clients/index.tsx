import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Slider from './slider';

const ForClients = () => {
    return (
        <Box sx={{ marginBottom: '150px' }}>
            <Container fixed>
                <Typography variant="home-h2" component="h2">
                    Преимущества для клиентов
                </Typography>
            </Container>
            <Slider />
        </Box>
    );
};

export default ForClients;
