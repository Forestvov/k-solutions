import { useMemo } from 'react';
import useSWR from 'swr';

import { endpoints, fetcher } from 'helpers/axios';

import type { IPagination } from 'types/pagination';
import type { IResponseNews } from 'types/news';

interface PropList extends IPagination {
    lang: string;
    type: 'Event' | 'News';
}

export function useGetNews({ lang = 'ru', page, pageSize, type }: PropList) {
    const URL = endpoints.news.list;

    const { data, isLoading, error, isValidating, mutate } = useSWR<IResponseNews>(
        [
            URL,
            {
                page,
                size: pageSize,
                sortDir: 'ASC',
                criteria: [
                    { key: 'lang', value: lang },
                    { key: 'type', value: type },
                ],
            },
            'post',
        ],
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    const memoizedValue = useMemo(
        () => ({
            news: data?.content || [],
            pageInfo: {
                currentPage: data?.pageable.pageNumber || 0,
                pages: data?.totalPages || 0,
            },
            newsLoading: isLoading,
            newsError: error,
            newsValidating: isValidating,
            newsEmpty: !isLoading && !data?.content.length,
            mutate,
        }),
        [data?.content, data?.last, data?.totalElements, error, isLoading, isValidating, mutate]
    );

    return memoizedValue;
}
