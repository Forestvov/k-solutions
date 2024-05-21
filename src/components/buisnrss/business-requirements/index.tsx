import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { RequirementsCard } from 'components/buisnrss/business-requirements/requirements-card';

import reqImg from '../../../assets/pages/businessPage/Sloj.png';

import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
`;

const BottomCard = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 15px 30px;
    border-radius: 25px;
    background: white;
    align-items: center;
    gap: 10px;
    margin-top: 25px;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const Title = styled.h2`
    font-size: 38px;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 28px;
    }
`;

const BottomCardTitle = styled.p`
    font-size: 28px;
    color: #373737;
    line-height: 50px;
    user-select: none;
    font-weight: 500;
    margin: 15px 0 0 0;

    @media (max-width: 1280px) {
        font-size: 24px;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;
`;

const Label = styled.p`
    font-size: 30px;
    color: #006838;
    user-select: none;
    font-weight: 500;
    margin-bottom: 140px;
    margin-top: 15px;

    @media (max-width: 770px) {
        display: none;
    }
`;

const Image = styled.img`
    width: 25%;
    position: absolute;
    left: 39%;
    bottom: 0;
    right: 50%;
`;

const Line = styled.div`
    width: 70px;
    height: 3px;
    background: #006838;
    border-radius: 10px;
`;

const RequirementsBusiness: FC = () => {
    const { t } = useTranslation('business-page');

    const cards = [
        {
            id: '1',
            title: t('biusnessReqTitleCard1'),
            text: t('biusnessReqtextCard1'),
            label: t('biusnessReqlabelCard1'),
        },
        {
            id: '2',
            title: t('biusnessReqTitleCard2'),
            text: t('biusnessReqtextCard2'),
            label: t('biusnessReqlabelCard2'),
        },
    ];

    return (
        <Box
            sx={{
                background: '#F6F7F8',
                paddingTop: { lg: '120px', xl: '100px', sm: '100px', xs: '80px' },
                paddingBottom: { lg: '120px', xl: '100px', sm: '100px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>{t('Требования к бизнесу')}</Title>
                <Content>
                    {cards.map((row: any) => (
                        <RequirementsCard key={row.id} row={row} />
                    ))}
                    <BottomCard>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '350px',
                                height: '200px',
                                flexDirection: 'column',
                            }}
                        >
                            <BottomCardTitle>{t('Кредитная история бизнеса')}</BottomCardTitle>
                            <Line />
                            <Paragraph>{t('creditStoryBusinessText')}</Paragraph>
                        </div>
                        <Image src={reqImg} />
                        <div>
                            <Label>{t('creditStoryBusinessLabel')}</Label>
                        </div>
                    </BottomCard>
                </Content>
            </Inner>
        </Box>
    );
};

export default RequirementsBusiness;
