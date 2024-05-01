import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { useAuthContext } from '../hooks/useAuthContext';
import { useRouter } from '../hooks/useRouter';

// ----------------------------------------------------------------------

interface Props {
    children: ReactNode;
}

export default function AuthGuard({ children }: Props) {
    const { loading } = useAuthContext();

    // @ts-ignore
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{loading ? <div>loading</div> : <Container>{children}</Container>}</>;
}

// ----------------------------------------------------------------------

function Container({ children }: Props) {
    const router = useRouter();

    const { authenticated, method } = useAuthContext();

    const [checked, setChecked] = useState(false);

    const check = useCallback(() => {
        if (!authenticated) {
            router.replace('/login');
        } else {
            setChecked(true);
        }
    }, [authenticated, method, router]);

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
