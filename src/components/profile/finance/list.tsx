import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import useDeviceSize from 'hooks/useDeviceSize';

import Counter from 'components/profile/counter-title';
import Title from 'components/profile/title';
import InvestSkeletonCard from 'components/profile/invest-skeleton-card';
import MyInvestCard from 'components/profile/invest-card/my-invest-card';
import PaginatorPage from 'components/shared/paginator-page';

import { useGetMyBriefs } from 'api/brief';

import Filters from './filters';

const TitleStyled = styled(Title)`
    margin: 0 0 30px;
`;

const List = () => {
    const { t, i18n } = useTranslation('personal');
    const { md, sm } = useDeviceSize();
    const [page, setPage] = useState(0);
    const [filter, setFilter] = useState({
        key: '',
        value: '',
    });

    const {
        briefs,
        briefsLoading,
        briefsEmpty,
        pageInfo: { currentPage, pages, totalElements, isLast, isFirst },
    } = useGetMyBriefs({
        lang: i18n.language,
        page,
        pageSize: md ? 3 : sm ? 2 : 1,
        filter,
    });

    if (!briefsLoading && briefsEmpty) return null;

    return (
        <div>
            <TitleStyled>
                {t('Активы')}
                {totalElements > 0 ? <Counter>({totalElements})</Counter> : ' (0)'}
            </TitleStyled>
            <Filters current={filter} onChange={setFilter} setPage={setPage} />
            <Box
                sx={{
                    display: 'grid',
                    gridGap: {
                        lg: '35px',
                        xs: '20px',
                    },
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2,1fr)',
                        md: 'repeat(3, 1fr)',
                    },
                    marginBottom: { lg: '30px', xs: '20px' },
                }}
            >
                {briefsLoading ? (
                    <>
                        <InvestSkeletonCard />
                        {sm && <InvestSkeletonCard />}
                        {md && <InvestSkeletonCard />}
                    </>
                ) : (
                    briefs.map((brief, idx) => <MyInvestCard key={idx} card={brief} />)
                )}
            </Box>
            <PaginatorPage
                countPages={pages}
                currentPage={currentPage}
                isFirst={isFirst}
                isLast={isLast}
                onChange={setPage}
            />
        </div>
    );
};

export default List;
