import type { ReactNode } from 'react';

import SplashScreen from 'components/shared/splash-screen';

import { CurrencyContext } from './currency-context';

// ----------------------------------------------------------------------

interface Props {
    children: ReactNode;
}

export function CurrencyConsumer({ children }: Props) {
    return <CurrencyContext.Consumer>{(value) => (value ? <SplashScreen /> : children)}</CurrencyContext.Consumer>;
}
