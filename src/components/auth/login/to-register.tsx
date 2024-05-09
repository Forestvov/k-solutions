import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import Button from './button';

const ToRegister = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('auth');

    return (
        <Button onClick={() => navigate('/register')} variation="outline" type="button">
            {t('Регистрация')}
        </Button>
    );
};

export default ToRegister;
