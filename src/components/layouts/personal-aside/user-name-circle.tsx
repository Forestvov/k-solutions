import styled from '@emotion/styled';
import { useAuthContext } from 'context/auth/hooks/useAuthContext';

const Circle = styled.div`
    background: #006838;
    color: #ffffff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    align-content: center;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    margin: 0 auto;
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
