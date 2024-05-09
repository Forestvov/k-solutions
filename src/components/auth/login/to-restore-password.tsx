import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';

const Link = styled(NavLink)`
    text-align: center;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 60px;
    letter-spacing: -0.02em;
    color: #006838;
    text-decoration: none;
`;

const ToRestorePassword = () => {
    const { t } = useTranslation('auth');
    return <Link to="/">{t('Восстановить пароль')}</Link>;
};

export default ToRestorePassword;
