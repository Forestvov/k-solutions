import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';

import SplashScreen from 'components/shared/splash-screen';

import { useAuthContext } from '../hooks/useAuthContext';
import { useRouter } from '../hooks/useRouter';
import { useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

interface Props {
    children: ReactNode;
}

export default function AuthGuard({ children }: Props) {
    // @ts-ignore
    const { loading } = useAuthContext();

    // @ts-ignore
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{loading ? <SplashScreen /> : <Container>{children}</Container>}</>;
}

// ----------------------------------------------------------------------

function Container({ children }: Props) {
    const router = useRouter();
    // @ts-ignore
    const { authenticated, user } = useAuthContext();
    const location = useLocation();

    const [checked, setChecked] = useState(false);

    const check = useCallback(() => {
        if (!authenticated) {
            router.replace('/login');
        } else {
            setChecked(true);
        }
    }, [authenticated, user, router]);

    useEffect(() => {
        if (user?.status === 'Not verified YC' && location.pathname !== '/settings') {
            router.push('/settings?tab=documents');
        } else if (user?.status === 'Canceled' && location.pathname !== '/settings') {
            router.push('/settings?tab=documents');
        }
    }, [location, user]);

    useEffect(() => {
        check();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!checked) {
        return <div />;
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
}
