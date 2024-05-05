import axios, { endpoints, fetcher } from 'helpers/axios';
import { useMemo } from 'react';
import useSWR from 'swr';

import type { IHistoryResponse, IToken } from 'types/transaction';
import type { IPagination } from 'types/pagination';

interface IHistoryRequst extends IPagination {
    transactionType: string;
    transactionLinkType: string;
}

export function useGetHistoryTransaction({ page, pageSize, transactionType, transactionLinkType }: IHistoryRequst) {
    const URL = endpoints.transaction.history;

    const criteria = transactionType
        ? [
              {
                  key: 'transactionType',
                  value: transactionType,
              },
          ]
        : transactionLinkType
          ? [
                {
                    key: 'transactionLinkType',
                    value: transactionLinkType,
                },
            ]
          : [];

    const { data, isLoading, error, isValidating, mutate } = useSWR<IHistoryResponse>(
        [
            URL,
            {
                page,
                size: pageSize,
                sortDir: 'DESC',
                criteria,
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
            data: data?.content || [],
            dataLoading: isLoading,
            pageInfo: {
                currentPage: data?.pageable.pageNumber || 0,
                pages: data?.totalPages || 0,
                totalElements: data?.totalElements || 0,
                isFirst: data ? data.first : true,
                isLast: data ? data.last : true,
            },
            dataError: error,
            dataValidating: isValidating,
            dataEmpty: !isLoading && !data?.content,
            mutate,
        }),
        [error, isLoading, isValidating, mutate, data]
    );

    return memoizedValue;
}

export function useGetTransactions(transactionLinkType: string) {
    const URL = endpoints.transaction.tokens;

    const { data, isLoading, error, isValidating, mutate } = useSWR<IToken[]>(
        [
            URL,
            {
                criteria: [{ key: 'transactionLinkType', value: transactionLinkType }],
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
            data: data || [],
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

export function useGetStaticCurse(currentName: string) {
    const URL = endpoints.transaction.tokens;

    const { data, isLoading, error, isValidating, mutate } = useSWR<IToken[]>(
        [
            URL,
            {
                criteria: [{ key: 'currentName', value: currentName }],
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
            curse: data || [],
            curseLoading: isLoading,
            curseError: error,
            curseValidating: isValidating,
            dataEmpty: !isLoading && !data,
            mutate,
        }),
        [error, isLoading, isValidating, mutate, data]
    );

    return memoizedValue;
}

export const addTransaction = async (data: any) => {
    return await axios.post(endpoints.transaction.add, data);
};

export const setMarkAsTransaction = async (id: string) => {
    return await axios.put(`${endpoints.transaction.setMarkAs}/${id}`);
};
