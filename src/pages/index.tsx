import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from 'layouts/auth-layout';
import MainLayout from 'layouts/main-layout';
import ProfileLayout from 'layouts/profile-layout';

import HomePage from './ui/home-page';
import PersonalPage from './ui/personal-page';
import LoginPage from './ui/login-page';
import RegisterPage from './ui/register-page';
import ShowcasesPage from './ui/showcases-page';
import ShowcasesItemPage from './ui/showcases-item-page';

export const appRouter = createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <div>error</div>,
        children: [
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/register',
                element: <RegisterPage />,
            },
        ],
    },
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
            {
                path: '/showcases',
                element: <ShowcasesPage />,
            },
            {
                path: '/showcases/:id',
                element: <ShowcasesItemPage />,
            },
        ],
    },
]);
