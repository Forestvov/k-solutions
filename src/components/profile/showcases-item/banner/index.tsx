import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import type { CompanyType } from 'types/company';

import ActionBlockFranchiseInvestClose from '../../showcases-item/action-block/view/action-block-franchise-invest-close';
import { useParams } from 'react-router';

const Wrapper = styled.div<{ bgSrc: string }>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 0 -30px;
    padding: 32px 30px 110px;
    border-radius: 35px 35px 0 0;
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% 72%, 0% 100%);

    &::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.8;
    }

    ${({ bgSrc }) =>
        bgSrc &&
        `
        background-image: url(${bgSrc});
    `}

    @media (min-width: 768px) {
        padding: 52px 30px 170px;
    }

    @media (min-width: 1668px) {
        padding: 52px 90px 190px;
        margin: 0 -90px;
    }
`;

const Content = styled.div`
    position: relative;
    z-index: 1;
    max-width: 1000px;
    width: 100%;
`;

const ImageBox = styled.div<{ image: string }>`
    width: 110px;
    height: 110px;
    border-radius: 15px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    ${({ image }) =>
        image &&
        `
        background-image: url(${image});
    `}

    @media (min-width: 1668px) {
        width: 130px;
        height: 130px;
    }
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
    position: relative;
    z-index: 1;
    max-width: 510px;
    width: 100%;
`;

interface Props {
    bg: string;
    name: string;
    logo: string;
    description: string;
    showClose: boolean;
    companyType: CompanyType;
    myTotal: number;
    countTransaction: number;
}

const Banner = ({ name, logo, description, showClose, companyType, countTransaction, myTotal, bg }: Props) => {
    const { t } = useTranslation('personal');
    const { userId } = useParams();

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('xl'));

    return (
        <Wrapper bgSrc={bg}>
            <Stack direction="row" spacing="60px">
                <Content>
                    <BackLink to={userId ? `/${userId}/showcases` : '/showcases'}>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1L1 6L6 11" stroke="white" strokeLinecap="round" />
                        </svg>
                        <span>{t('Назад к витрине')}</span>
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
                        <ImageBox image={logo} />
                        <CompanyName>
                            {name}
                            {showClose && companyType === 'Franchise' && <StatusTag>{t('Активный')}</StatusTag>}
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
