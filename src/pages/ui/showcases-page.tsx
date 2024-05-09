import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import Showcases from 'components/profile/showcases';

const ShowcasesPage = () => {
    const { t } = useTranslation('personal');
    return (
        <>
            <Helmet>
                <title>{t('Витрина')}</title>
            </Helmet>
            <Showcases />
        </>
    );
};

export default ShowcasesPage;
