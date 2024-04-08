import { createBrowserRouter } from 'react-router-dom';

import MainLayout from 'layouts/main-layout';

import HomePage from './ui/home-page';

export const appRouter = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <div>error</div>,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
        ],
    },
]);
