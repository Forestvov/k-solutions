import { Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { AuthProvider } from 'context/auth';

import { SettingsProvider } from 'context/settings/wrapper/settings-provider';
import { CurrencyProvider } from 'context/currency';
import SplashScreen from 'components/shared/splash-screen';

import { appRouter } from './pages';

export const App = () => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = '//code.jivo.ru/widget/Sux93C8ukn';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

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
