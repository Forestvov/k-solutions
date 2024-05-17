import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import InvestProgress from 'components/profile/invest-progress';

const Wrapper = styled(Stack)`
    background: #fff;
    border-radius: 15px;
    margin-bottom: 20px;

    @media (min-width: 1280px) {
        position: absolute;
        width: auto;
        top: -50px;
        left: 10px;
        right: 10px;
        height: 85px;
        margin-bottom: 0;
    }

    @media (min-width: 1668px) {
        left: 30px;
        height: 100px;
        right: 30px;
    }
`;

const LogoWrapper = styled.div`
    border-bottom: 1px solid #d8d8d8;

    @media (min-width: 1280px) {
        border-bottom: none;
    }
`;

const LogoBox = styled.div`
    position: relative;
    text-align: center;
    height: 85px;
    width: 85px;
    flex: 0 0 auto;

    @media (min-width: 1280px) {
        border-right: 1px solid #d8d8d8;
    }

    @media (min-width: 1668px) {
        width: 101px;
        height: 100px;
    }
`;

interface Props {
    logo: string;
    amountFinish: number;
    amount: number;
    accountCount: number;
    hidePercent: boolean;
}

const Investing = ({ logo, amount, amountFinish, accountCount, hidePercent }: Props) => {
    return (
        <Wrapper
            direction={{ xl: 'row' }}
            spacing={{
                lg: '30px',
                xs: '15px',
            }}
        >
            <LogoWrapper>
                <LogoBox>
                    <Box
                        sx={{
                            borderRadius: '15px 0 0 15px',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url(${logo})`,
                        }}
                    />
                </LogoBox>
            </LogoWrapper>
            <Box sx={{ width: '100%', padding: { lg: '23px 30px 0 0', xl: '13px 15px 10px 0', xs: '10px' } }}>
                <InvestProgress
                    accountCount={accountCount}
                    amountFinish={amountFinish}
                    hidePercent={hidePercent}
                    amount={amount}
                />
            </Box>
        </Wrapper>
    );
};

export default Investing;
