import type { ReactNode } from 'react';
import { useCallback, useEffect } from 'react';

import SplashScreen from 'components/shared/splash-screen';

import { useRouter } from '../hooks/useRouter';
import { useAuthContext } from '../hooks/useAuthContext';

// ----------------------------------------------------------------------

interface Props {
    children: ReactNode;
}

export default function GuestGuard({ children }: Props) {
    const { loading } = useAuthContext();

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{loading ? <SplashScreen /> : <Container>{children}</Container>}</>;
}

// ----------------------------------------------------------------------

function Container({ children }: Props) {
    const router = useRouter();
    const { authenticated } = useAuthContext();

    const check = useCallback(() => {
        if (authenticated) {
            router.replace('/personal');
        }
    }, [authenticated, router]);

    useEffect(() => {
        check();
    }, [check]);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
}
