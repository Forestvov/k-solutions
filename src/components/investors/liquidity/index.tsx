import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// img
import liqImg_1 from 'assets/pages/investors/liqImg_1.png';
import liqImg_2 from 'assets/pages/investors/liqImg_2.png';
import liqImg_3 from 'assets/pages/investors/liqImg_3.png';
import liqImg_4 from 'assets/pages/investors/liqImg_4.png';
import liqImg_5 from 'assets/pages/investors/liqImg_5.png';
import liqImg_6 from 'assets/pages/investors/liqImg_6.png';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 766px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

const Paragraph = styled.p`
    margin: 5px 0 5px 0;
    font-weight: 300;
    font-size: 20px;
    max-width: 819px;
    line-height: 26px;

    @media (max-width: 1024px) {
        font-size: 18px;
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

const ImageWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    @media (max-width: 766px) {
        gap: 5px;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

const Img = styled.img`
    width: 80%;
    border-radius: 16px;
    user-select: none;

    @media (max-width: 766px) {
        width: 100%;
    }
`;

const LeftPart = styled.div`
    max-width: 403px;

    @media (max-width: 766px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

const Profit = styled.h3`
    font-size: 96px;
    font-weight: 400;
    color: #000000;
    margin: 55px 0;
    user-select: none;

    @media (max-width: 1024px) {
        font-size: 48px;
    }

    @media (max-width: 766px) {
        font-size: 38px;
    }
`;

const ProfitLabel = styled.p`
    margin: 5px 0 5px 0;
    font-weight: 300;
    font-size: 20px;
    max-width: 819px;
    line-height: 26px;

    @media (max-width: 1024px) {
        font-size: 18px;
    }

    @media (max-width: 766px) {
        display: none;
    }
`;
const Liquidity: FC = () => {
    const images = [
        { src: liqImg_1, alt: '1' },
        { src: liqImg_2, alt: '2' },
        { src: liqImg_3, alt: '3' },
        { src: liqImg_4, alt: '4' },
        { src: liqImg_5, alt: '5' },
        { src: liqImg_6, alt: '6' },
    ];

    const { t } = useTranslation('investor-page');

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
                <Content>
                    <div>
                        <Title>{t('Ликвидность')}</Title>
                        <Paragraph>{t('Выводите свой портфель')}</Paragraph>
                        <ImageWrapper>
                            {images.map((image, index) => (
                                <Img key={index} src={image.src} alt={image.alt} />
                            ))}
                        </ImageWrapper>
                    </div>
                    <LeftPart>
                        <div>
                            <Profit>{t('1 млн')}</Profit>
                            <Paragraph>{t('7 часов')}</Paragraph>
                        </div>
                        <div>
                            <Profit>{t('10 млн')}</Profit>
                            <Paragraph>{t('4 дня')}</Paragraph>
                            <br />
                            <ProfitLabel>{t('при выставлении цены')}</ProfitLabel>
                        </div>
                    </LeftPart>
                </Content>
            </Inner>
        </Box>
    );
};

export default Liquidity;
