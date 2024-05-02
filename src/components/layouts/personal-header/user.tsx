import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';

import Icon from 'assets/header/user-personal.svg?react';
// import Arrow from 'assets/arrows/arrow-bottom.svg?react';

const Wrapper = styled(Stack)`
    &:hover .user-arrow {
        transform: rotate(180deg);
    }
`;

// const IconArrow = styled(Arrow)`
//     transform: translatY(1px);
//     transition: transform 225ms ease-in-out;
// `;

const IconUser = styled(Icon)`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`;

const User = () => {
    // @ts-ignore
    const { user } = useAuthContext();

    return (
        <Wrapper direction="row" alignItems="center" spacing={{ sm: '20px' }}>
            <IconUser />
            <Stack direction="row" alignItems="center" spacing="10px">
                <Typography variant="body2">{user.accountTypeName === 'Company' ? 'Компания' : 'Инвестор'}</Typography>
                {/* <IconArrow className="user-arrow" /> */}
            </Stack>
        </Wrapper>
    );
};

export default User;
