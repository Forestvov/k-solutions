import styled from '@emotion/styled';

const DefaultButtonNav = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(calc(-50% - 31px));
    background: #f6f7f8;
    border: none;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    &:hover {
        color: #20836d;
    }
`;

export default DefaultButtonNav;
