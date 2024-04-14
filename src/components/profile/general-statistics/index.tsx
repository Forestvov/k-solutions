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
    return (
        <WhiteWrapper>
            <TitleComponent>Общая статистика платформы</TitleComponent>
            <Stack spacing={{ xs: '15px', sm: '31px' }}>
                <Item label="Средневзвешенная ставка на рынке" value="25,5 %" />
                <Item label="Инвесторов на платформе" value="28 681" />
                <Item label="Среднее время выдачи займа" value="1 день " />
                <Item label="Выдано кредитов бизнесу" value="> 10 000 000$" />
                <Item label="Заемщиков на платформе" value="> 189 000" />
            </Stack>
        </WhiteWrapper>
    );
};

export default GeneralStatistics;
