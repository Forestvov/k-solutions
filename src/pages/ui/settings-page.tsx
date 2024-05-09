import { useTranslation } from 'react-i18next';

import { Helmet } from 'react-helmet-async';

import Settings from 'components/profile/settings';

const SettingsPage = () => {
    const { t } = useTranslation('personal');

    return (
        <>
            <Helmet>
                <title>{t('Аккаунт')}</title>
            </Helmet>
            <Settings />
        </>
    );
};

export default SettingsPage;
