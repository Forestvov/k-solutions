import { useTranslation } from 'react-i18next';

import Login from 'components/auth/login';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
    const { t } = useTranslation('auth');
    return (
        <>
            <Helmet>
                <title>{t('Авторизация')}</title>
            </Helmet>
            <Login />
        </>
    );
};

export default LoginPage;
