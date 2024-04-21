import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from 'layouts/auth-layout';
import MainLayout from 'layouts/main-layout';
import ProfileLayout from 'layouts/profile-layout';
import AdminLayout from 'layouts/admin-layout';

import HomePage from './ui/home-page';
import PersonalPage from './ui/personal-page';
import LoginPage from './ui/login-page';
import RegisterPage from './ui/register-page';
import CompanyCreate from './ui/admin/company-create';
import CompaniesList from './ui/admin/companies-list';

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
        ],
    },
    {
        // todo add protected routes
        element: <AdminLayout />,
        errorElement: <div>error</div>,
        children: [
            {
                path: '/dashboard/companies',
                element: <CompaniesList />,
            },
            {
                path: '/dashboard/company-create',
                element: <CompanyCreate />,
            },
        ],
    },
]);
