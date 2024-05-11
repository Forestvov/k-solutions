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
    waitRequest: null | string;
    timeAccept: null | string;
    timeProcess: null | string;
}

export function SettingsProvider({ children }: Props) {
    // @ts-ignore
    const { user } = useAuthContext();

    const [settings, setsSttings] = useState<State>({
        briefcaseHot: '0',
        waitRequest: '0',
        timeAccept: '0',
        timeProcess: '0',
    });

    const initialize = useCallback(async () => {
        try {
            const resHotOffer = await axios<SettingResponse>(`${endpoints.settings.root}/briefcase.hot.offer`);
            const resWaitRequest = await axios<SettingResponse>(`${endpoints.settings.root}/p2p.time.wait_requisites`);
            const resTimeAccept = await axios<SettingResponse>(`${endpoints.settings.root}/token.time.accept`);
            const resTimeProcess = await axios<SettingResponse>(`${endpoints.settings.root}/p2p.time.process`);

            const dataHotOffer = await resHotOffer.data;
            const dataWaitRequest = await resWaitRequest.data;
            const dataTimeAccept = await resTimeAccept.data;
            const dataTimeProcess = await resTimeProcess.data;

            setsSttings({
                briefcaseHot: dataHotOffer.settingValue || '',
                waitRequest: dataWaitRequest.settingValue || '',
                timeAccept: dataTimeAccept.settingValue || '',
                timeProcess: dataTimeProcess.settingValue || '',
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
