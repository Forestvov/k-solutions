import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import { useGetNews } from 'api/news';

import Pagination from 'components/pagination';

import WhiteWrapper from '../white-wrapper';
import Title from '../title';

import Event from './event';
import EvetSkelenot from './evet-skelenot';

const Wrapper = styled(WhiteWrapper)`
    @media (min-width: 1668px) {
        max-width: 633px;
    }
`;

const TitleComponent = styled(Title)`
    margin: 0 0 34px 0;
`;

export const Events = () => {
    const { t, i18n } = useTranslation('personal');

    const [page, setPage] = useState(0);

    const {
        news,
        newsLoading,
        pageInfo: { currentPage, pages },
    } = useGetNews({
        lang: i18n.language,
        page: page,
        pageSize: 2,
    });

    return (
        <Wrapper>
            <TitleComponent>{t('События')}</TitleComponent>
            {newsLoading ? (
                <EvetSkelenot />
            ) : (
                <Stack spacing="30px" sx={{ marginBottom: '30px' }}>
                    {news.map((item) => (
                        <Event key={item.id} {...item} />
                    ))}
                </Stack>
            )}
            <Pagination countPage={pages} currentPage={currentPage} onChangePage={setPage} />
        </Wrapper>
    );
};

export default Events;
