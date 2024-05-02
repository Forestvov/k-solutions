import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import InvestProgress from 'components/profile/invest-progress';

const Wrapper = styled(Stack)`
    background: #fff;
    border-radius: 15px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        position: absolute;
        width: auto;
        top: -50px;
        left: 20px;
        right: 20px;
        height: 100px;
        margin-bottom: 0;
    }

    @media (min-width: 1024px) {
    }

    @media (min-width: 1280px) {
        left: 30px;
        right: 30px;
    }

    @media (min-width: 1668px) {
    }
`;

const LogoBox = styled.div`
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #d8d8d8;

    @media (min-width: 768px) {
        padding: 5px 17px 10px 10px;
        border-bottom: none;
        border-right: 1px solid #d8d8d8;
    }
`;

const Image = styled.img`
    display: block;
    margin-bottom: 5px;
    width: auto;
    height: 85px;

    @media (min-width: 768px) {
        margin-bottom: 2px;
    }
`;

const Name = styled.div`
    font-size: 0.75rem;
    color: #03330c;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    width: fit-content;
    justify-content: center;
    align-items: center;
`;

interface Props {
    logo: string;
    amountFinish: number;
    amount: number;
    accountCount: number;
}

const Investing = ({ logo, amount, amountFinish, accountCount }: Props) => {
    return (
        <Wrapper direction={{ sm: 'row' }} spacing="30px">
            <LogoBox>
                <Name>
                    <Image src={logo} alt="Energia" />
                </Name>
            </LogoBox>
            <Box sx={{ width: '100%', padding: { sm: '23px 30px 0 0', xs: '20px' } }}>
                <InvestProgress accountCount={accountCount} amountFinish={amountFinish} amount={amount} />
            </Box>
        </Wrapper>
    );
};

export default Investing;
