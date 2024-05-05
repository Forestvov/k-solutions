import { useMemo } from 'react';
import useSWR from 'swr';

import axios, { endpoints, fetcher } from 'helpers/axios';

import type { IPagination } from 'types/pagination';
import type {
    AnaliticGainView,
    HotBriefResponse,
    IBriefPage,
    IResponseAnalitic,
    IResponseHistory,
    IResponseMyBrief,
} from 'types/brief';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

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

export function useGetMyBriefs({ page, pageSize }: IPagination) {
    const URL = endpoints.briefs.myInvest;

    const { data, isLoading, error, isValidating, mutate } = useSWR<IResponseMyBrief>(
        [
            URL,
            {
                page,
                size: pageSize,
                sortDir: 'ASC',
                criteria: [],
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

export function useGetAnaliticActive() {
    const URL = endpoints.briefs.analiticActiveByUser;

    const { data, isLoading, error, isValidating, mutate } = useSWR<IResponseAnalitic>(
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
            data,
            dataLoading: isLoading,
            dataError: error,
            dataValidating: isValidating,
            dataEmpty: !isLoading && !data,
            mutate,
        }),
        [error, isLoading, isValidating, mutate, data]
    );

    return memoizedValue;
}

interface IGainRequest {
    fromDate: Dayjs | null;
    toDate: Dayjs | null;
}

export function useGetAnaliticGain({ fromDate, toDate }: IGainRequest) {
    const URL = endpoints.briefs.analiticGainByUser;

    const { data, isLoading, error, isValidating, mutate } = useSWR<AnaliticGainView[]>(
        [
            URL,
            {
                fromDate: fromDate ? dayjs(fromDate).format('DD-MM-YYYY') : '01-01-2024',
                toDate: toDate ? dayjs(toDate).format('DD-MM-YYYY') : '01-03-2030',
            },
            'put',
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
            data,
            dataLoading: isLoading,
            dataError: error,
            dataValidating: isValidating,
            dataEmpty: !isLoading && !data,
            mutate,
        }),
        [error, isLoading, isValidating, mutate, data]
    );

    return memoizedValue;
}

export function useGetAnaliticHistoryGain({ page, pageSize }: IPagination) {
    const URL = endpoints.briefs.gainHistory;

    const { data, isLoading, error, isValidating, mutate } = useSWR<IResponseHistory>(
        [
            URL,
            {
                page,
                size: pageSize,
            },
            'POST',
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
            data: data?.page.content,
            dataLoading: isLoading,
            pageInfo: {
                currentPage: data?.page.pageable.pageNumber || 0,
                pages: data?.page.totalPages || 0,
                totalElements: data?.page.totalElements || 0,
                isFirst: data ? data.page.first : true,
                isLast: data ? data.page.last : true,
            },
            dataError: error,
            dataValidating: isValidating,
            dataEmpty: !isLoading && !data?.page?.content?.length,
            mutate,
        }),
        [error, isLoading, isValidating, mutate, data]
    );

    return memoizedValue;
}

interface RequestInvest {
    briefcaseId: string;
    amount: number | string;
}

export const investBrief = async (data: RequestInvest) => {
    await axios.post(endpoints.briefs.invest, data);
};

export const closeBrief = async (data: RequestInvest) => {
    await axios.put(`${endpoints.briefs.close}/${data.briefcaseId}`, { amount: data.amount });
};
