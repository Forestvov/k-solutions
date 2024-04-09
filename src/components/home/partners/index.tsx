import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Slider from './slider';

const Partners = () => {
    return (
        <Box sx={{ marginBottom: '150px' }}>
            <Container fixed>
                <Typography variant="home-h2" component="h2" sx={{ marginBottom: '40px' }}>
                    Наши партнёры
                </Typography>
            </Container>
            <Slider />
        </Box>
    );
};

export default Partners;
