import { createContext } from 'react';

// ----------------------------------------------------------------------

export const SettingsContext = createContext({
    settings: {
        briefcaseHot: '0',
    },
});
