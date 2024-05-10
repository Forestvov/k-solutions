import type { ReactNode } from 'react';

import { CurrencyContext } from './currency-context';

// ----------------------------------------------------------------------

interface Props {
    children: ReactNode;
}

export function CurrencyConsumer({ children }: Props) {
    return <CurrencyContext.Consumer>{(value) => (value ? <div>loader</div> : children)}</CurrencyContext.Consumer>;
}
