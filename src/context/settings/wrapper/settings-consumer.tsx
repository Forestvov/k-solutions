import type { ReactNode } from 'react';

import { SettingsContext } from './settings-context';

// ----------------------------------------------------------------------

interface Props {
    children: ReactNode;
}

export function SettingsConsumer({ children }: Props) {
    return <SettingsContext.Consumer>{(value) => (value ? <div>loader</div> : children)}</SettingsContext.Consumer>;
}
