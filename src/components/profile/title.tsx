import styled from '@emotion/styled';

const Title = styled.h3`
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 28px;
    color: #373737;
    letter-spacing: 0.015em;

    @media (min-width: 768px) {
        font-size: 1.4rem;
    }

    @media (min-width: 1280px) {
        font-size: 21px;
        line-height: 28px;
    }

    @media (min-width: 1668px) {
        font-size: 1.8rem;
        line-height: 39px;
    }
`;

export default Title;
