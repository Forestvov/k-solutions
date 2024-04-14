import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Player from 'components/shared/player';

const Video = () => {
    return (
        <Box sx={{ marginBottom: { xs: '100px', sm: '130px', md: '150px' } }}>
            <Container fixed>
                <Typography variant="home-h2" component="h2">
                    Как это работает
                </Typography>
                <Player />
            </Container>
        </Box>
    );
};

export default Video;
