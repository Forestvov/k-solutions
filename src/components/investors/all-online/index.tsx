import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import OnCard_1 from 'assets/pages/investors/OnCard_1.png';
import OnCard_2 from 'assets/pages/investors/OnCard_2.png';
import line from 'assets/pages/investors/line.png';
import ManagerIconImg from 'assets/pages/investors/ManagerIcon.png';

import OnCard from 'components/investors/all-online/card';

const Inner = styled(Container)`
    height: 100%;
`;

const TopPart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 766px) {
        justify-content: flex-start;
        align-items: flex-start;
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
    width: 40%;

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

    @media (max-width: 766px) {
        display: none;
    }
`;

const Manager = styled.div`
    display: flex;
    width: 45%;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background: #006838;
    border-radius: 10px;
    padding: 15px;
`;

const OnlineSection: FC = () => {
    return (
        <Box
            sx={{
                height: { lg: '950px', xl: '915px', sm: '800px', xs: '650px' },
                background: '#F6F7F8',
                paddingTop: { lg: '100px', xl: '80px', sm: '50px', xs: '30px' },
                overflow: 'hidden',
                marginBottom: { xs: '100px', sm: '130px', md: '150px' },
            }}
        >
            <Inner fixed>
                <Title>Всё онлайн и прозрачно</Title>
                <TopPart>
                    <OnCard img={OnCard_1} title="Договор онлайн" label="Присоеденитесть к договору-оферте-онлайн" />
                    <OnCard
                        img={OnCard_2}
                        title="Подключение за день"
                        label="Подайте заявку утром, и уже веччером можно начать работу"
                    />
                </TopPart>
                <BottomPart>
                    <OnCard
                        title="Персональный менджер"
                        label="Помогает настроить работу, обучить сотрудников, разобраться с заявками"
                    />
                    <Img src={line} />
                    <Manager>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <ManagerIcon src={ManagerIconImg} />
                            <div>
                                <span style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>
                                    Мария Яблонева
                                </span>
                                <p style={{ color: 'white', fontSize: '16px', fontWeight: '300', margin: '0' }}>
                                    Персональный менеджер
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
                </BottomPart>
            </Inner>
        </Box>
    );
};

export default OnlineSection;
