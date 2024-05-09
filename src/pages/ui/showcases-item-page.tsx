import 'swiper/css';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import ShowcasesItem from 'components/profile/showcases-item';

const ShowcasesItemPage = () => {
    const { t } = useTranslation('personal');

    return (
        <>
            <Helmet>
                <title>{t('Витрина')}</title>
            </Helmet>
            <ShowcasesItem />
        </>
    );
};

export default ShowcasesItemPage;
