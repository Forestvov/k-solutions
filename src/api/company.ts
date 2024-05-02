import useSWR from 'swr';
import { useMemo } from 'react';

import { endpoints, fetcher } from 'helpers/axios';
import type { ICompanyPag } from 'types/company';

export function useGetCompany(id: string) {
    const URL = `${endpoints.company.page}/${id}`;

    const { data, isLoading, error, isValidating, mutate } = useSWR<ICompanyPag>(
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
            company: data,
            companyLoading: isLoading,
            companyError: error,
            companyValidating: isValidating,
            companyEmpty: !isLoading && !data,
            mutate,
        }),
        [error, isLoading, isValidating, mutate, data]
    );

    return memoizedValue;
}
