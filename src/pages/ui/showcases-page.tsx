import { Helmet } from 'react-helmet-async';

import Showcases from 'components/profile/showcases';

const ShowcasesPage = () => {
    return (
        <>
            <Helmet>
                <title>Витрина</title>
            </Helmet>
            <Showcases />
        </>
    );
};

export default ShowcasesPage;
