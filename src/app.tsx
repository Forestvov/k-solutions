import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { AuthProvider } from 'context/auth';

import { SettingsProvider } from 'context/settings/wrapper/settings-provider';
import { CurrencyProvider } from 'context/currency';
import SplashScreen from 'components/shared/splash-screen';

import { appRouter } from './pages';

export const App = () => {
    return (
        <AuthProvider>
            <CurrencyProvider>
                <SettingsProvider>
                    <Suspense fallback={<SplashScreen />}>
                        <RouterProvider router={appRouter} />
                    </Suspense>
                </SettingsProvider>
            </CurrencyProvider>
        </AuthProvider>
    );
};
