import styled from '@emotion/styled';

import PaginatorPage from 'components/shared/paginator-page';

import Title from '../title';

import Filters from './filters';
import List from './list';

const Wrapper = styled.div`
    padding: 30px 30px 60px;
    border-radius: 35px;
    background: #fff;
    margin: 0 0 30px !important;
`;

const TitleStyled = styled(Title)`
    margin: 0 0 30px;
`;

const Counter = styled.span`
    font-weight: 800;
    color: #006838;
    font-size: inherit;
    line-height: inherit;
    margin-left: 15px;
`;

const Showcases = () => {
    return (
        <Wrapper>
            <TitleStyled>
                Витрина
                <Counter>(17)</Counter>
            </TitleStyled>
            <Filters />
            <List />
            <PaginatorPage />
        </Wrapper>
    );
};

export default Showcases;
