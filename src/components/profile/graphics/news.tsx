import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import { useGetNews } from 'api/news';

import Title from 'components/profile/title';
import EvetSkelenot from 'components/profile/events/evet-skelenot';
import Event from 'components/profile/events/event';
import Pagination from 'components/pagination';

const TitleStyled = styled(Title)`
    margin: 40px 0 30px;
`;

const News = () => {
    const { t, i18n } = useTranslation('personal');

    const [page, setPage] = useState(0);

    const {
        news,
        newsLoading,
        pageInfo: { currentPage, pages },
    } = useGetNews({
        lang: i18n.language,
        type: 'News',
        page: page,
        pageSize: 2,
    });

    return (
        <Box>
            <TitleStyled>{t('Аналитика')}</TitleStyled>
            {newsLoading ? (
                <EvetSkelenot />
            ) : (
                <Box
                    sx={{
                        marginBottom: '30px',
                        display: 'grid',
                        gridGap: '30px',
                        gridTemplateColumns: {
                            lg: 'repeat(2, 1fr)',
                        },
                    }}
                >
                    {news.map((item) => (
                        <Event key={item.id} {...item} />
                    ))}
                </Box>
            )}
            <Pagination countPage={pages} currentPage={currentPage} onChangePage={setPage} />
        </Box>
    );
};

export default News;
