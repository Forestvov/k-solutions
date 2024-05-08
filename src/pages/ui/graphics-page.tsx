import Graphics from 'components/profile/graphics';
import { Helmet } from 'react-helmet-async';

const GraphicsPage = () => {
    return (
        <>
            <Helmet>
                <title>Рынки</title>
            </Helmet>
            <Graphics />
        </>
    );
};

export default GraphicsPage;
