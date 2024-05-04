import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import type { CompanyType } from 'types/company';

import ActionBlockFranchiseInvestClose from '../../showcases-item/action-block/view/action-block-franchise-invest-close';

import BgSrc from 'assets/pages/personal/bg-single-page.png';

const Wrapper = styled.div`
    background-image: url(${BgSrc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 0 -30px;
    padding: 32px 30px 120px;
    border-radius: 35px 35px 0 0;

    @media (min-width: 768px) {
        height: 570px;
        padding: 52px 30px 0;
    }

    @media (min-width: 1668px) {
        padding: 52px 90px 0;
        margin: 0 -90px;
    }
`;

const Content = styled.div`
    max-width: 1000px;
    width: 100%;
`;

const ImageBox = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 15px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;

    @media (min-width: 1668px) {
        width: 130px;
        height: 130px;
    }
`;

const Image = styled.img`
    width: 80px;
    height: 85px;
`;

const BackLink = styled(NavLink)`
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 12px;
    color: #ffffff;
    text-decoration: none;
    opacity: 0.6;
    margin-bottom: 26px;

    span {
        margin-left: 10px;
    }
`;

const CompanyName = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-weight: 600;
    font-size: 3rem;
    line-height: 60px;
    color: #ffffff;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    @media (min-width: 1668px) {
        font-size: 4rem;
        line-height: 77px;
    }
`;

const StatusTag = styled.span`
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 15px;
    color: #ffffff;
    padding: 8px 25px;
    border-radius: 4px;
    background: #00b227;
    margin-bottom: 15px;

    @media (min-width: 768px) {
        margin-left: 20px;
        margin-bottom: 0;
    }

    @media (min-width: 1668px) {
        padding: 10px 30px;
        margin-left: 30px;
    }
`;

const Description = styled.p`
    font-size: 0.9rem;
    line-height: 28px;
    color: #ffffff;
    margin: 0;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 1.1rem;
        line-height: 31px;
        text-align: left;
    }

    @media (min-width: 1668px) {
        font-size: 1.625rem;
    }
`;

const WrapperClose = styled.div`
    max-width: 510px;
    width: 100%;
`;

interface Props {
    name: string;
    logo: string;
    description: string;
    showClose: boolean;
    companyType: CompanyType;
    myTotal: number;
    countTransaction: number;
}

const Banner = ({ name, logo, description, showClose, companyType, countTransaction, myTotal }: Props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('xl'));

    return (
        <Wrapper>
            <Stack direction="row" spacing="60px">
                <Content>
                    <BackLink to="/showcases">
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1L1 6L6 11" stroke="white" strokeLinecap="round" />
                        </svg>
                        <span>Назад к витрине</span>
                    </BackLink>
                    <Stack
                        sx={{
                            marginBottom: {
                                xs: '5px',
                                sm: '44px',
                            },
                        }}
                        alignItems="center"
                        direction={{
                            sm: 'row',
                        }}
                        spacing={{
                            lg: '60px',
                            xs: '10px',
                        }}
                    >
                        <ImageBox>
                            <Image src={logo} />
                        </ImageBox>
                        <CompanyName>
                            {name}
                            {showClose && companyType === 'Franchise' && <StatusTag>Активный</StatusTag>}
                        </CompanyName>
                    </Stack>
                    <Description>{description}</Description>
                </Content>
                {matches && showClose && (
                    <WrapperClose>
                        <ActionBlockFranchiseInvestClose
                            companyType={companyType}
                            myTotal={myTotal}
                            countTransaction={countTransaction}
                        />
                    </WrapperClose>
                )}
            </Stack>
        </Wrapper>
    );
};

export default Banner;
