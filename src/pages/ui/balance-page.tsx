import { useTranslation } from 'react-i18next';

import { Helmet } from 'react-helmet-async';

import Balance from 'components/profile/balance';

const BalancePage = () => {
    const { t } = useTranslation('personal');

    return (
        <>
            <Helmet>
                <title>{t('Финансы')}</title>
            </Helmet>
            <Balance />
        </>
    );
};

export default BalancePage;
