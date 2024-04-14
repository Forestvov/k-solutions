import styled from '@emotion/styled';

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
    return <Circle>NG</Circle>;
};

export default UserNameCircle;
