import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import SkeletonLoader from './skeleton';

const Slider = lazy(() => import('./slider'));

const Partners = () => {
    const { t } = useTranslation('home-page');

    return (
        <Box sx={{ marginBottom: { xs: '100px', sm: '130px', md: '150px' } }}>
            <Container fixed>
                <Typography variant="home-h2" component="h2" sx={{ marginBottom: '40px' }}>
                    {t('Наши партнёры')}
                </Typography>
            </Container>
            <Suspense fallback={<SkeletonLoader />}>
                <Slider />
            </Suspense>
        </Box>
    );
};

export default Partners;
