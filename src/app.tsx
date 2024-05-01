import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { AuthProvider } from 'context/auth';

import { appRouter } from './pages';

export const App = () => {
    return (
        <AuthProvider>
            <Suspense fallback={<div>загрузка</div>}>
                <RouterProvider router={appRouter} />
            </Suspense>
        </AuthProvider>
    );
};
