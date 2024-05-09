import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Finance from 'components/profile/finance';

const FinancePage = () => {
    const { t } = useTranslation('personal');

    return (
        <>
            <Helmet>
                <title>{t('Активы')}</title>
            </Helmet>
            <Finance />
        </>
    );
};

export default FinancePage;
