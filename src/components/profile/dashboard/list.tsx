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

    const { md, sm } = useDeviceSize();

    const [page, setPage] = useState(0);

    const {
        hotBriefs,
        hotBriefsLoading,
        pageInfo: { currentPage, pages },
    } = useGetHotBrief({
        lang: i18n.language,
        page: page,
        pageSize: md ? 3 : sm ? 2 : 1,
        percentFinish: briefcaseHot,
    });

    return (
        <>
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
                    marginBottom: { lg: '60px', xs: '20px' },
                }}
            >
                {hotBriefsLoading ? (
                    <>
                        <InvestSkeletonCard />
                        {sm && <InvestSkeletonCard />}
                        {md && <InvestSkeletonCard />}
                    </>
                ) : (
                    hotBriefs.map((brief, idx) => <InvestCard isHot hideStats key={idx} card={brief} />)
                )}
            </Box>
            <Pagination countPage={pages} currentPage={currentPage} onChangePage={setPage} />
        </>
    );
};

export default List;
