import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { appRouter } from './pages';

export const App = () => {
    return (
        <Suspense fallback={<div>загрузка</div>}>
            <RouterProvider router={appRouter} />
        </Suspense>
    );
};
