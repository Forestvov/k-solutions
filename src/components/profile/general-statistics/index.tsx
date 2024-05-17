import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import WhiteWrapper from '../white-wrapper';
import Title from '../title';
import Item from './item';

const TitleComponent = styled(Title)`
    margin: 0 0 30px 0;

    @media (min-width: 1668px) {
        margin: 0 0 47px 0;
    }
`;

const GeneralStatistics = () => {
    const { t } = useTranslation('personal');
    return (
        <WhiteWrapper>
            <TitleComponent>{t('Общая статистика платформы')}</TitleComponent>
            <Stack spacing={{ xs: '15px', lg: '31px' }}>
                <Item label={t('Средневзвешенная ставка на рынке')} value="25,5 %" />
                <Item label={t('Инвесторов на платформе')} value="28 681" />
                <Item label={t('Среднее время выдачи займа')} value={`1 ${t('день')}`} />
                <Item label={t('Выдано кредитов бизнесу')} value="> 10 000 000$" />
                <Item label={t('Заемщиков на платформе')} value="> 189 000" />
            </Stack>
        </WhiteWrapper>
    );
};

export default GeneralStatistics;
