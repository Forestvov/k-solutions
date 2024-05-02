import type { ReactNode } from 'react';

import SplashScreen from 'components/shared/splash-screen';

import { AuthContext } from './auth-context';

// ----------------------------------------------------------------------

interface Props {
    children: ReactNode;
}

export function AuthConsumer({ children }: Props) {
    return <AuthContext.Consumer>{(auth) => (auth.loading ? <SplashScreen /> : children)}</AuthContext.Consumer>;
}
