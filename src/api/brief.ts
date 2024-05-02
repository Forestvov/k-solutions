import { useMemo } from 'react';
import useSWR from 'swr';

import { endpoints, fetcher } from 'helpers/axios';

import type { IPagination } from 'types/pagination';
import type { HotBriefResponse, IBriefPage } from 'types/brief';

interface PropList extends IPagination {
    percentFinish: string;
}

export function useGetHotBrief({ page, pageSize, percentFinish }: PropList) {
    const URL = endpoints.briefs.hot;

    const { data, isLoading, error, isValidating, mutate } = useSWR<HotBriefResponse>(
        [
            Number(percentFinish) > 0 ? URL : null,
            {
                page,
                size: pageSize,
                sortDir: 'ASC',
                criteria: [{ key: 'percentFinish', operation: '>', value: percentFinish }],
            },
            'post',
            {
                lang: 'ru',
            },
        ],
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    const memoizedValue = useMemo(
        () => ({
            hotBriefs: data?.content || [],
            pageInfo: {
                currentPage: data?.pageable.pageNumber || 0,
                pages: data?.totalPages || 0,
            },
            hotBriefsLoading: isLoading,
            hotBriefsError: error,
            hotBriefsValidating: isValidating,
            hotBriefsEmpty: !isLoading && !data?.content.length,
            mutate,
        }),
        [data?.content, data?.last, data?.totalElements, error, isLoading, isValidating, mutate]
    );

    return memoizedValue;
}

interface GetListProp extends IPagination {
    filter: Record<string, string>;
}

export function useGetListBrief({ page, pageSize, filter }: GetListProp) {
    const URL = endpoints.briefs.hot;

    const { data, isLoading, error, isValidating, mutate } = useSWR<HotBriefResponse>(
        [
            URL,
            {
                page,
                size: pageSize,
                sortDir: 'ASC',
                criteria: filter.value ? [filter] : [],
            },
            'post',
            {
                lang: 'ru',
            },
        ],
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    const memoizedValue = useMemo(
        () => ({
            briefs: data?.content || [],
            pageInfo: {
                currentPage: data?.pageable.pageNumber || 0,
                pages: data?.totalPages || 0,
                totalElements: data?.totalElements || 0,
                isFirst: data ? data.first : true,
                isLast: data ? data.last : true,
            },
            briefsLoading: isLoading,
            briefsError: error,
            briefsValidating: isValidating,
            briefsEmpty: !isLoading && !data?.content.length,
            mutate,
        }),
        [
            data?.content,
            data?.last,
            data?.first,
            data?.totalPages,
            data?.totalElements,
            error,
            isLoading,
            isValidating,
            mutate,
        ]
    );

    return memoizedValue;
}

export function useGetBrief(id: string) {
    const URL = `${endpoints.briefs.page}/${id}`;

    const { data, isLoading, error, isValidating, mutate } = useSWR<IBriefPage>(
        [
            URL,
            {},
            'get',
            {
                lang: 'ru',
            },
        ],
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    const memoizedValue = useMemo(
        () => ({
            brief: data,
            briefsLoading: isLoading,
            briefsError: error,
            briefsValidating: isValidating,
            briefsEmpty: !isLoading && !data,
            mutate,
        }),
        [error, isLoading, isValidating, mutate, data]
    );

    return memoizedValue;
}
