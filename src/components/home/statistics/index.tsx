import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import StatItem from './stat-item';

const Statistics = () => {
    return (
        <Box sx={{ marginBottom: '130px' }}>
            <Container fixed>
                <Typography variant="home-h2" component="h2">
                    Цифры говорят за нас лучше всего
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} gap="40px 45px">
                    <StatItem value="25,2 %" label="Средневзвешенная ставка за 30 дней" />
                    <StatItem value="18,7" sub="МЛРД $" label="Выдано займов бизнесу" />
                    <StatItem value="148 704" label="Инвесторов на платформе" />
                    <StatItem value="2,4 %" label="Дефолтность по поколению 2022 года" />
                    <StatItem value="3 400" label="Уникальных компаний профинансировано" />
                    <StatItem value="650,4" sub="МЛН $" label="Объём торгов на вторичном рынке за последние 30 дней" />
                </Box>
            </Container>
        </Box>
    );
};

export default Statistics;
