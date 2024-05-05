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

const TitleStyled = styled(Title)`
    margin: 0 0 30px;
`;

const List = () => {
    const { lg, md } = useDeviceSize();
    const [page, setPage] = useState(0);

    const {
        briefs,
        briefsLoading,
        pageInfo: { currentPage, pages, totalElements, isLast, isFirst },
    } = useGetMyBriefs({
        page,
        pageSize: lg ? 3 : md ? 2 : 1,
    });

    return (
        <div>
            <TitleStyled>
                Активы
                {totalElements > 0 ? <Counter>({totalElements})</Counter> : ' (0)'}
            </TitleStyled>
            <Box
                sx={{
                    display: 'grid',
                    gridGap: '35px',
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    },
                    marginBottom: { lg: '30px', xs: '20px' },
                }}
            >
                {briefsLoading ? (
                    <>
                        <InvestSkeletonCard />
                        {md && <InvestSkeletonCard />}
                        {lg && <InvestSkeletonCard />}
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
