import Icon from 'assets/header/laggout.svg?react';
import styled from '@emotion/styled';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';
import { useRouter } from 'context/auth/hooks/useRouter';
import { useTranslation } from 'react-i18next';

const Button = styled.button`
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;

    span {
        display: none;
        position: absolute;
        left: 45px;
        top: 50%;
        transform: translateY(-50%);
        white-space: nowrap;
        color: #494949;
        font-size: 15px;
    }

    @media (max-width: 767px) {
        span {
            display: inline-block;
        }
    }
`;

const Laggout = () => {
    // @ts-ignore
    const { logout } = useAuthContext();
    const router = useRouter();

    const { t } = useTranslation('personal');

    const logoutHandler = async () => {
        await logout();
        await router.push('/login');
    };

    return (
        <Button onClick={logoutHandler}>
            <Icon />
            <span>{t('Выйти')}</span>
        </Button>
    );
};

export default Laggout;
