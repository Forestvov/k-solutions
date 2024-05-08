import 'swiper/css';
import { Helmet } from 'react-helmet-async';

import ShowcasesItem from 'components/profile/showcases-item';

const ShowcasesItemPage = () => {
    return (
        <>
            <Helmet>
                <title>Витрина</title>
            </Helmet>
            <ShowcasesItem />
        </>
    );
};

export default ShowcasesItemPage;
