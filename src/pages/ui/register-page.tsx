import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Register from 'components/auth/register';

const RegisterPage = () => {
    const { t } = useTranslation('auth');
    return (
        <>
            <Helmet>
                <title>{t('Регистрация')}</title>
            </Helmet>
            <Register />
        </>
    );
};

export default RegisterPage;
