import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Player from './player';

const Video = () => {
    return (
        <Box sx={{ marginBottom: '150px' }}>
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
