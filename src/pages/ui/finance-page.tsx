import { Helmet } from 'react-helmet-async';

import Finance from 'components/profile/finance';

const FinancePage = () => {
    return (
        <>
            <Helmet>
                <title>Активы</title>
            </Helmet>
            <Finance />
        </>
    );
};

export default FinancePage;
