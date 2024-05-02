import Icon from 'assets/header/laggout.svg?react';
import styled from '@emotion/styled';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';
import { useRouter } from 'context/auth/hooks/useRouter';

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`;

const Laggout = () => {
    // @ts-ignore
    const { logout } = useAuthContext();
    const router = useRouter();

    const logoutHandler = async () => {
        await logout();
        await router.push('/login');
    };

    return (
        <Button onClick={logoutHandler}>
            <Icon />
        </Button>
    );
};

export default Laggout;
