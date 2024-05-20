import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import { useGetNews } from 'api/news';

import Title from 'components/profile/title';
import EvetSkelenot from 'components/profile/events/evet-skelenot';

import NewPost from './new-post';
import PaginatorPage from 'components/shared/paginator-page';

const TitleStyled = styled(Title)`
    margin: 40px 0;
`;

const News = () => {
    const { t, i18n } = useTranslation('personal');

    const [pageSize, setPageSize] = useState<number>(6);

    const {
        news,
        newsLoading,
        pageInfo: { isLast },
    } = useGetNews({
        lang: i18n.language,
        type: 'News',
        page: 0,
        pageSize,
    });

    return (
        <Box
            sx={{
                marginBottom: '40px',
            }}
        >
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
                            lg: '1fr',
                        },
                    }}
                >
                    {news.map((item) => (
                        <NewPost {...item} key={item.id} />
                    ))}
                </Box>
            )}
            <PaginatorPage showMore currentSize={pageSize} onChangeSize={setPageSize} isLast={isLast} />
        </Box>
    );
};

export default News;
