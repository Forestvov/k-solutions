import styled from '@emotion/styled';

import GrayWrapper from '../gray-wrapper';
import Title from '../../title';
import List from './list';

const TitleStyled = styled(Title)`
    margin: 0 0 37px;
`;

const History = () => {
    return (
        <GrayWrapper>
            <TitleStyled>История Транзакций</TitleStyled>
            <List />
        </GrayWrapper>
    );
};

export default History;
