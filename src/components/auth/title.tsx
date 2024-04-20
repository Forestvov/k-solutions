import styled from '@emotion/styled';

const Title = styled.h2`
    font-weight: 600;
    font-size: 2rem;
    line-height: 45px;
    letter-spacing: -0.02em;
    color: #373737;
    margin: 0;

    @media (min-width: 1024px) {
        font-size: 2.5rem;
        line-height: 50px;
    }

    @media (min-width: 1280px) {
        font-size: 2.8rem;
        line-height: 60px;
    }

    @media (min-width: 1668px) {
        font-size: 3rem;
    }
`;

export default Title;
