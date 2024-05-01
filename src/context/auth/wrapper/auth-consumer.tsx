import type { ReactNode } from 'react';

import { AuthContext } from './auth-context';

// ----------------------------------------------------------------------

interface Props {
    children: ReactNode;
}

export function AuthConsumer({ children }: Props) {
    return <AuthContext.Consumer>{(auth) => (auth.loading ? <div>loader</div> : children)}</AuthContext.Consumer>;
}
