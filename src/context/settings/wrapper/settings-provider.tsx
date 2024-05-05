import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import axios, { endpoints } from 'helpers/axios';
import { useAuthContext } from 'context/auth/hooks/useAuthContext';
import { SettingsContext } from './settings-context';

import { getCookie, setCookie } from '../cookie';

// ----------------------------------------------------------------------

interface Props {
    children: ReactNode;
}

interface SettingResponse {
    settingCode: string;
    settingValue: string;
}

interface State {
    briefcaseHot: null | string;
}

export function SettingsProvider({ children }: Props) {
    // @ts-ignore
    const { user } = useAuthContext();

    const [settings, setsSttings] = useState<State>({
        briefcaseHot: null,
    });

    const initialize = useCallback(async () => {
        try {
            const resHotOffer = await axios<SettingResponse>(`${endpoints.settings.root}/briefcase.hot.offer`);

            const data = await resHotOffer.data;

            await setsSttings({
                briefcaseHot: data.settingValue || '',
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        const randomPercent = getCookie('rd');

        if (!randomPercent) {
            const rd = Math.random() * (40 - 20) + 20;
            setCookie('rd', String(rd));
        }
    }, []);

    useEffect(() => {
        if (user) {
            initialize();
        }
    }, [initialize, user]);

    const memoizedValue = useMemo(
        () => ({
            settings,
        }),
        [settings]
    );
    // @ts-ignore
    return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
