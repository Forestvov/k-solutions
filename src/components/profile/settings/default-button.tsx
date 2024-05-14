import styled from '@emotion/styled';

const DefaultButton = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 65px;
    border-radius: 10px;
    border: none;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 280px;
    }
`;

export const DefaultLink = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 65px;
    border-radius: 10px;
    border: none;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;

    @media (min-width: 768px) {
        width: 280px;
    }
`;

export default DefaultButton;
