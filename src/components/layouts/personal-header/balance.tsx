import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';
import { fCurrency } from 'helpers/number-format';
import { useAuthContext } from 'context/auth/hooks/useAuthContext';

const Wrapper = styled(NavLink)`
    margin-left: 30px;
    padding: 15px;
    background: #006838;
    border-radius: 10px;
    color: #fff;
    line-height: 19px;
    font-size: 0.9rem;
    text-decoration: none;

    @media (min-width: 1280px) {
        margin-left: 50px;
    }

    @media (min-width: 768px) {
        font-size: 1rem;
        padding: 16px 22px 15px;
    }
`;

const Price = styled.span`
    font-weight: 600;
`;

const Balance = () => {
    // @ts-ignore
    const { user } = useAuthContext();

    return (
        <Wrapper to="/balance">
            Баланс: {user.balance.balance ? <Price>{fCurrency(user.balance.balance)}</Price> : '$0'}
        </Wrapper>
    );
};

export default Balance;
