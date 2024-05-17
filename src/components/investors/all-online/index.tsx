import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import OnCard_1 from 'assets/pages/investors/OnCard11.svg';
import OnCard_2 from 'assets/pages/investors/OnCard22.svg';
import line from 'assets/pages/investors/line.png';
import ManagerIconImg from 'assets/pages/investors/ManagerIcon.png';

import OnCard from 'components/investors/all-online/card';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    height: 100%;
`;

const TopPart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 50px;
    margin-top: 50px;

    @media (max-width: 766px) {
        justify-content: flex-start;
        align-items: flex-start;
        gap: 20px;
        margin-bottom: 20px;
    }
`;

const ManagerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 250px;

    .managerBlockTop {
        width: 70%;
        height: 35px;
        border-radius: 0 0 20px 20px;
        background: #e8f1f0;
        margin-top: -20px;
    }

    .managerBlockBottom {
        width: 70%;
        height: 35px;
        border-radius: 20px 20px 0 0;
        background: #e8f1f0;
        margin-bottom: -20px;
    }

    @media (max-width: 770px) {
        display: none;
    }
`;

const Title = styled.h2`
    margin: 0 auto;
    font-size: 48px;
    color: #373737;
    user-select: none;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 38px;
    }
`;

const Img = styled.img`
    width: 30%;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const ManagerIcon = styled.img`
    width: 70px;
    height: 70px;
`;

const BottomPart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    padding: 20px 30px;
    background: white;
    border-radius: 30px;

    @media (max-width: 770px) {
        width: 100%;
        flex-direction: column;
    }
`;

const BottomCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 350px;

    .BottomCardTitle {
        font-size: 32px;
        font-weight: 500;
        color: #373737;

        @media (max-width: 1280px) {
            font-size: 26px;
        }

        @media (max-width: 770px) {
            font-size: 22px;
        }
    }

    .BottomCardText {
        font-size: 18px;
        font-weight: 400;
        color: #747474;

        @media (max-width: 1280px) {
            font-size: 16px;
        }

        @media (max-width: 770px) {
            font-size: 14px;
        }
    }
`;

const Manager = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background: #006838;
    border-radius: 10px;
    padding: 15px;

    @media (max-width: 770px) {
        display: none;
    }
`;

const OnlineSection: FC = () => {
    const { t } = useTranslation('investor-page');

    return (
        <Box
            sx={{
                background: '#F6F7F8',
                paddingTop: { lg: '100px', xl: '80px', sm: '50px', xs: '30px' },
                paddingBottom: { lg: '100px', xl: '80px', sm: '50px', xs: '30px' },
                overflow: 'hidden',
            }}
        >
            <Inner fixed>
                <Title>{t('Всё онлайн и прозрачно')}</Title>
                <TopPart>
                    <OnCard
                        img={OnCard_1}
                        title={t('Договор онлайн')}
                        label={t('Присоединяйтесь к договору-оферте-онлайн')}
                    />
                    <OnCard
                        img={OnCard_2}
                        title={t('Подключение за день')}
                        label={t('Подайте заявку утром, и уже вечером можно начать работу')}
                    />
                </TopPart>
                <BottomPart>
                    <BottomCard>
                        <h2 className="BottomCardTitle">{t('Персональный менеджер')}</h2>
                        <p className="BottomCardText">
                            {t('Помогает настроить работу, обучить сотрудников, разобраться с заявками')}
                        </p>
                    </BottomCard>
                    <Img src={line} />
                    <ManagerContainer>
                        <div className="managerBlockTop" />
                        <Manager>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <ManagerIcon src={ManagerIconImg} />
                                <div>
                                    <span style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>
                                        {t('Мария Яблонева')}
                                    </span>
                                    <p style={{ color: 'white', fontSize: '16px', fontWeight: '300', margin: '0' }}>
                                        {t('Персональный менеджер')}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <svg
                                    width="13"
                                    height="24"
                                    viewBox="0 0 13 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1 1L12 12L1 23" stroke="white" strokeLinecap="round" />
                                </svg>
                            </div>
                        </Manager>
                        <div className="managerBlockBottom" />
                    </ManagerContainer>
                </BottomPart>
            </Inner>
        </Box>
    );
};

export default OnlineSection;
