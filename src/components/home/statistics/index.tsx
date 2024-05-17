import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import StatItem from './stat-item';

const Statistics = () => {
    const { t } = useTranslation('home-page');

    return (
        <Box sx={{ marginBottom: { xs: '100px', md: '130px' } }}>
            <Container fixed>
                <Typography variant="home-h2" component="h2">
                    {t('Цифры говорят за нас лучше всего')}
                </Typography>
                <Box
                    sx={{ display: 'grid', gridTemplateColumns: { sm: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' } }}
                    gap={{ xs: '30px', md: '40px 45px' }}
                >
                    <StatItem value="25,2 %" label={t('Средневзвешенная ставка за 30 дней')} />
                    <StatItem value="18,7" sub={`${t('МЛН')} $`} label={t('Выдано займов бизнесу')} />
                    <StatItem value="148 704" label={t('Инвесторов на платформе')} />
                    <StatItem value="2,4 %" label={t('Дефолтность по поколению 2022 года')} />
                    <StatItem value="3 400" label={t('Уникальных компаний профинансировано')} />
                    <StatItem
                        value="650,4"
                        sub={`${t('МЛН')} $`}
                        label={t('Объём торгов на вторичном рынке за последние 30 дней')}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default Statistics;
