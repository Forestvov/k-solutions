import { useContext } from 'react';

import { SettingsContext } from '../wrapper/settings-context';

// ----------------------------------------------------------------------

export const useSettingsContext = () => {
    const context = useContext(SettingsContext);

    if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

    return context;
};
