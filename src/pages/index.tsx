import { createBrowserRouter } from 'react-router-dom';

import MainLayout from 'layouts/main-layout';
import ProfileLayout from 'layouts/profile-layout';

import HomePage from './ui/home-page';
import PersonalPage from './ui/personal-page';

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
    {
        // todo add protected routes
        element: <ProfileLayout />,
        errorElement: <div>error</div>,
        children: [
            {
                path: '/personal',
                element: <PersonalPage />,
            },
        ],
    },
]);
