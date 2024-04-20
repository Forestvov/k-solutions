import styled from '@emotion/styled';

const Wrapper = styled.div`
    margin-left: 30px;
    padding: 15px;
    background: #006838;
    border-radius: 10px;
    color: #fff;
    line-height: 19px;
    font-size: 0.9rem;

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
    return (
        <Wrapper>
            Баланс: <Price>$ 50,558</Price>
        </Wrapper>
    );
};
export default Balance;