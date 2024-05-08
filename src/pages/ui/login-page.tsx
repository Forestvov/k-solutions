import Login from 'components/auth/login';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
    return (
        <>
            <Helmet>
                <title>Авторизация</title>
            </Helmet>
            <Login />
        </>
    );
};

export default LoginPage;
