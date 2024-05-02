import type { ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { SettingsContext } from './settings-context';
import axios, { endpoints } from 'helpers/axios';
import { useAuthContext } from 'context/auth/hooks/useAuthContext';

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

    return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
