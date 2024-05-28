import { lazy } from 'react';
import { createHashRouter, Navigate } from 'react-router-dom';
// Contexts
import AuthGuard from 'context/auth/guard/auth-guard';
import GuestGuard from 'context/auth/guard/guest-guard';

// Layouts
const AuthLayout = lazy(() => import('layouts/auth-layout'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const ProfileLayout = lazy(() => import('layouts/profile-layout'));

// Guest Pages
const HomePage = lazy(() => import('./ui/home-page'));
const GraphicsPage = lazy(() => import('./ui/graphics-page'));
const BusinessPage = lazy(() => import('./ui/business-page'));
const AboutPlatformPage = lazy(() => import('./ui/about-platfom-page'));
const BlogPage = lazy(() => import('./ui/blog-page'));
const SingleBlogPage = lazy(() => import('./ui/single-blog-page'));

// Profile Pages
const InvestorsPage = lazy(() => import('./ui/investors-page'));
const PersonalPage = lazy(() => import('./ui/personal-page'));
const ShowcasesPage = lazy(() => import('./ui/showcases-page'));
const ShowcasesItemPage = lazy(() => import('./ui/showcases-item-page'));
const FinancePage = lazy(() => import('./ui/finance-page'));
const BalancePage = lazy(() => import('./ui/balance-page'));
const SettingsPage = lazy(() => import('./ui/settings-page'));

// Auth Pages
const LoginPage = lazy(() => import('./ui/login-page'));
const RegisterPage = lazy(() => import('./ui/register-page'));
// const VerifyPage = lazy(() => import('./ui/verify-page'));
// const VerifyByIdPage = lazy(() => import('./ui/verify-by-id-page'));
const RestorePage = lazy(() => import('./ui/restore-page'));

// Policy Pages
const PrivacyPolicyPage = lazy(() => import('./ui/privacy-policy-page'));
const AmlPolicyPage = lazy(() => import('./ui/aml-policy-page'));

export const appRouter = createHashRouter([
    {
        element: (
            <GuestGuard>
                <AuthLayout />
            </GuestGuard>
        ),
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
            {
                path: '/recovery',
                element: <RestorePage />,
            },
            {
                path: '/recovery/:token',
                element: <RestorePage />,
            },
            // {
            //     path: '/verify',
            //     element: <VerifyPage />,
            // },
            // {
            //     path: '/verify/:id',
            //     element: <VerifyByIdPage />,
            // },
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
            {
                path: '/privacy-policy',
                element: <PrivacyPolicyPage />,
            },
            {
                path: '/aml-policy',
                element: <AmlPolicyPage />,
            },
            {
                path: '/investors',
                element: <InvestorsPage />,
            },
            {
                path: '/business',
                element: <BusinessPage />,
            },
            {
                path: '/aboutPlatform',
                element: <AboutPlatformPage />,
            },
            {
                path: '/blog',
                element: <BlogPage />,
            },
            {
                path: '/singleBlog/:id',
                element: <SingleBlogPage />,
            },
        ],
    },
    {
        element: (
            <AuthGuard>
                <ProfileLayout />
            </AuthGuard>
        ),
        errorElement: <div>error</div>,
        children: [
            {
                path: '/personal',
                element: <PersonalPage />,
            },
            {
                path: '/finance',
                element: <FinancePage />,
            },
            {
                path: '/showcases',
                element: <ShowcasesPage />,
            },
            {
                path: '/showcases/:id',
                element: <ShowcasesItemPage />,
            },
            {
                path: '/balance',
                element: <BalancePage />,
            },
            {
                path: '/settings',
                element: <SettingsPage />,
            },
            {
                path: '/graphics',
                element: <GraphicsPage />,
            },
        ],
    },
    {
        element: (
            <AuthGuard>
                <ProfileLayout />
            </AuthGuard>
        ),
        errorElement: <div>error</div>,
        children: [
            {
                path: '/:userId/personal',
                element: <PersonalPage />,
            },
            {
                path: '/:userId/finance',
                element: <FinancePage />,
            },
            {
                path: '/:userId/showcases',
                element: <ShowcasesPage />,
            },
            {
                path: '/:userId/showcases/:id',
                element: <ShowcasesItemPage />,
            },
            {
                path: '/:userId/balance',
                element: <BalancePage />,
            },
            {
                path: '/:userId/settings',
                element: <SettingsPage />,
            },
            {
                path: '/:userId/graphics',
                element: <GraphicsPage />,
            },
        ],
    },
    { path: '*', element: <Navigate to="/#" replace /> },
]);
