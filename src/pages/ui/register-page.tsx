import { Helmet } from 'react-helmet-async';

import Register from 'components/auth/register';

const RegisterPage = () => {
    return (
        <>
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <Register />
        </>
    );
};

export default RegisterPage;
