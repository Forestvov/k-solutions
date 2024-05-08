import { Helmet } from 'react-helmet-async';

import Settings from 'components/profile/settings';

const SettingsPage = () => {
    return (
        <>
            <Helmet>
                <title>Аккаунт</title>
            </Helmet>
            <Settings />
        </>
    );
};

export default SettingsPage;
