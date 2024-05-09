import { useTranslation } from 'react-i18next';

import Graphics from 'components/profile/graphics';
import { Helmet } from 'react-helmet-async';

const GraphicsPage = () => {
    const { t } = useTranslation('personal');

    return (
        <>
            <Helmet>
                <title>{t('Рынки')}</title>
            </Helmet>
            <Graphics />
        </>
    );
};

export default GraphicsPage;
