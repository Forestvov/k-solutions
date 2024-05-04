import { endpoints, fetcher } from 'helpers/axios';
import { useMemo } from 'react';
import useSWR from 'swr';

import type { IToken } from 'types/transaction';

export function useGetTransactions() {
    const URL = endpoints.transaction.tokens;

    const { data, isLoading, error, isValidating, mutate } = useSWR<IToken[]>(
        [
            URL,
            {},
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
