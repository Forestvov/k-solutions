import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

import PaginatorPage from 'components/shared/paginator-page';
import { useGetListBrief } from 'api/brief';

import Title from '../title';
import Counter from '../counter-title';

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

const Showcases = () => {
    const { t, i18n } = useTranslation('personal');

    const [pageSize, setPageSize] = useState(6);
    const [filter, setFilter] = useState({
        key: '',
        value: '',
    });

    const {
        briefs,
        pageInfo: { totalElements, isLast },
        briefsLoading,
    } = useGetListBrief({
        lang: i18n.language,
        page: 0,
        pageSize: pageSize,
        filter,
    });

    return (
        <Wrapper>
            <TitleStyled>
                {t('Витрина')}
                {!briefsLoading && <Counter>({totalElements})</Counter>}
            </TitleStyled>
            <Filters current={filter} onChange={setFilter} />
            <List loading={briefsLoading} list={briefs} />
            <PaginatorPage showMore currentSize={pageSize} onChangeSize={setPageSize} isLast={isLast} />
        </Wrapper>
    );
};

export default Showcases;
