import { useState } from 'react';
import Box from '@mui/material/Box';

import { useGetHotBrief } from 'api/brief';

import { useSettingsContext } from 'context/settings/hooks/useSettingsContext';

import useDeviceSize from 'hooks/useDeviceSize';

import InvestCard from 'components/profile/invest-card';
import Pagination from 'components/pagination';

import InvestSkeletonCard from '../invest-skeleton-card';
import { useTranslation } from 'react-i18next';

const List = () => {
    const { i18n } = useTranslation('personal');

    const {
        settings: { briefcaseHot },
    } = useSettingsContext();

    const { lg, md } = useDeviceSize();

    const [page, setPage] = useState(0);

    const {
        hotBriefs,
        hotBriefsLoading,
        pageInfo: { currentPage, pages },
    } = useGetHotBrief({
        lang: i18n.language,
        page: page,
        pageSize: lg ? 3 : md ? 2 : 1,
        percentFinish: briefcaseHot,
    });

    return (
        <>
            <Box
                sx={{
                    display: 'grid',
                    gridGap: '35px',
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                        marginBottom: { lg: '60px', xs: '20px' },
                    },
                }}
            >
                {hotBriefsLoading ? (
                    <>
                        <InvestSkeletonCard />
                        {md && <InvestSkeletonCard />}
                        {lg && <InvestSkeletonCard />}
                    </>
                ) : (
                    hotBriefs.map((brief) => <InvestCard hideStats key={brief.briefcaseId} card={brief} />)
                )}
            </Box>
            <Pagination countPage={pages} currentPage={currentPage} onChangePage={setPage} />
        </>
    );
};

export default List;
