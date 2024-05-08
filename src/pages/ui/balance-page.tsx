import { Helmet } from 'react-helmet-async';

import Balance from 'components/profile/balance';

const BalancePage = () => {
    return (
        <>
            <Helmet>
                <title>Финансы</title>
            </Helmet>
            <Balance />
        </>
    );
};

export default BalancePage;
