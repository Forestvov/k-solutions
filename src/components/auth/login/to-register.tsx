import { useNavigate } from 'react-router';

import Button from './button';

const ToRegister = () => {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate('/register')} variation="outline" type="button">
            Регистрация
        </Button>
    );
};

export default ToRegister;
