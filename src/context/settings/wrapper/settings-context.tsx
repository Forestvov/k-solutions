import { createContext } from 'react';

// ----------------------------------------------------------------------

export const SettingsContext = createContext({
    settings: {
        briefcaseHot: '0',
        waitRequest: '0',
        timeAccept: '0',
        timeProcess: '0',
    },
});
