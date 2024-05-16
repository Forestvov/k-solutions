import type { ReactNode } from 'react';

import SplashScreen from 'components/shared/splash-screen';

import { SettingsContext } from './settings-context';

// ----------------------------------------------------------------------

interface Props {
    children: ReactNode;
}

export function SettingsConsumer({ children }: Props) {
    return <SettingsContext.Consumer>{(value) => (value ? <SplashScreen /> : children)}</SettingsContext.Consumer>;
}
