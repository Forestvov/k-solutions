import styled from '@emotion/styled';
import { useAuthContext } from 'context/auth/hooks/useAuthContext';

const Circle = styled.div`
    background: #006838;
    color: #ffffff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    align-content: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    margin: 0 auto;

    @media (min-width: 1668px) {
        width: 50px;
        height: 50px;
        font-size: 1rem;
    }
`;

const UserNameCircle = () => {
    // @ts-ignore
    const { user } = useAuthContext();

    const splitName = user.fio.split(' ');

    return (
        <Circle>
            {splitName[0].slice(0, 1)} {splitName[1].slice(0, 1)}
        </Circle>
    );
};

export default UserNameCircle;
