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

const LogoWrapper = styled.div`
    border-bottom: 1px solid #d8d8d8;

    @media (min-width: 768px) {
        border-bottom: none;
    }
`;

const LogoBox = styled.div`
    position: relative;
    text-align: center;
    height: 100px;
    width: 101px;
    flex: 0 0 auto;

    @media (min-width: 768px) {
        border-right: 1px solid #d8d8d8;
    }
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
            <LogoWrapper>
                <LogoBox>
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'auto',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url(${logo})`,
                        }}
                    />
                </LogoBox>
            </LogoWrapper>
            <Box sx={{ width: '100%', padding: { sm: '23px 30px 0 0', xs: '20px' } }}>
                <InvestProgress accountCount={accountCount} amountFinish={amountFinish} amount={amount} />
            </Box>
        </Wrapper>
    );
};

export default Investing;
