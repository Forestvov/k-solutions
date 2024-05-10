import { useContext } from 'react';

import { CurrencyContext } from '../wrapper/currency-context';

// ----------------------------------------------------------------------

export const useCurrencyContext = () => {
    const context = useContext(CurrencyContext);

    if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

    return context;
};
