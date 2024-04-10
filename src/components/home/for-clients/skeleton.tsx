import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

const SkeletonBlock = styled(Skeleton)`
    border-radius: 25px;
    height: 460px;
    background: #f6f7f8;
    width: 100%;
    transform: scale(1);

    &:last-of-type {
        display: none;
    }

    @media (min-width: 768px) {
        border-radius: 35px;

        &:last-of-type {
            display: block;
        }
    }

    @media (min-width: 1024px) {
        height: 350px;
    }

    @media (min-width: 1280px) {
        height: 350px;
    }
`;

const SkeletonLoader = () => {
    return (
        <Box sx={{ marginBottom: { xs: '100px', sm: '130px', md: '150px' } }} height={{ md: '412px' }}>
            <Container fixed>
                <Stack
                    direction="row"
                    spacing={{
                        xs: '15px',
                        sm: '30px',
                        md: '40px',
                    }}
                >
                    <SkeletonBlock />
                    <SkeletonBlock />
                </Stack>
            </Container>
        </Box>
    );
};

export default SkeletonLoader;
