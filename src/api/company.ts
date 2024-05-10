import useSWR from 'swr';
import { useMemo } from 'react';

import type { ICompanyPag, ISlide } from 'types/company';

import { endpoints, fetcher } from 'helpers/axios';

export function useGetCompany(id: string, lang = 'ru') {
    const URL = `${endpoints.company.page}/${id}`;

    const { data, isLoading, error, isValidating, mutate } = useSWR<ICompanyPag>(
        [
            URL,
            {},
            'get',
            {
                lang,
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

export function useGetCompanySlider(id: string) {
    const URL = `${endpoints.company.slider}/${id}`;

    const { data, isLoading, error, isValidating, mutate } = useSWR<ISlide[]>(
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
            slides: data || [],
            slidesLoading: isLoading,
            slidesError: error,
            slidesValidating: isValidating,
            slidesEmpty: !isLoading && !data,
            mutate,
        }),
        [error, isLoading, isValidating, mutate, data]
    );

    return memoizedValue;
}
