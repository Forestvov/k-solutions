import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Restore from 'components/auth/restore';

const RestorePage = () => {
    const { t } = useTranslation('auth');
    return (
        <>
            <Helmet>
                <title>{t('Восстановить пароль')}</title>
            </Helmet>
            <Restore />
        </>
    );
};

export default RestorePage;
