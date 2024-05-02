import styled from '@emotion/styled';

import PaginatorPage from 'components/shared/paginator-page';

import Title from '../title';
import Counter from '../counter-title';

import Filters from './filters';
import List from './list';
import { useGetListBrief } from 'api/brief';
import { useState } from 'react';

const Wrapper = styled.div`
    padding: 30px 30px 60px;
    border-radius: 35px;
    background: #fff;
    margin: 0 0 30px !important;
`;

const TitleStyled = styled(Title)`
    margin: 0 0 30px;
`;

const Showcases = () => {
    const [page, setPage] = useState(0);
    const [filter, setFilter] = useState({
        key: '',
        value: '',
    });

    const {
        briefs,
        pageInfo: { totalElements, currentPage, pages, isFirst, isLast },
        briefsLoading,
    } = useGetListBrief({
        page: page,
        pageSize: 6,
        filter,
    });

    return (
        <Wrapper>
            <TitleStyled>
                Витрина
                {!briefsLoading && <Counter>({totalElements})</Counter>}
            </TitleStyled>
            <Filters current={filter} onChange={setFilter} />
            <List loading={briefsLoading} list={briefs} />
            <PaginatorPage
                countPages={pages}
                currentPage={currentPage}
                isFirst={isFirst}
                isLast={isLast}
                onChange={setPage}
            />
        </Wrapper>
    );
};

export default Showcases;
