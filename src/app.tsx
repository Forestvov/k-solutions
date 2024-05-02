import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { AuthProvider } from 'context/auth';

import { SettingsProvider } from 'context/settings/wrapper/settings-provider';
import SplashScreen from 'components/shared/splash-screen';

import { appRouter } from './pages';

export const App = () => {
    return (
        <AuthProvider>
            <SettingsProvider>
                <Suspense fallback={<SplashScreen />}>
                    <RouterProvider router={appRouter} />
                </Suspense>
            </SettingsProvider>
        </AuthProvider>
    );
};
