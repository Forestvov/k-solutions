import type { FC } from 'react';
import { useParams } from 'react-router';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import InvestBlogCard from 'assets/pages/blog/StoitLiInvestirovat.png';
import IPOBlogCard from 'assets/pages/blog/IPO.png';
import Finansirovanie from 'assets/pages/blog/Finansirovanie.png';
import pensia from 'assets/pages/blog/pensia.png';
import RiskPortfelya from 'assets/pages/blog/RiskPortfelya.png';
import Individualnyj from 'assets/pages/blog/Individualnyj.png';
import Kapitalizatsiya from 'assets/pages/blog/Kapitalizatsiya.png';
import Lichnye from 'assets/pages/blog/Lichnye.png';
import Plyusy from 'assets/pages/blog/Plyusy.png';
import { useTranslation } from 'react-i18next';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Content = styled.div`
    width: 100%;
    gap: 10px;
    padding: 50px;
    border-radius: 50px;
    background: #f6f7f8;

    @media (max-width: 600px) {
        padding: 20px;
    }
`;

const Title = styled.h2`
    font-size: 3rem;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 2.375rem;
    }

    @media (max-width: 600px) {
        font-size: 1.5rem;
        line-height: 40px;
    }
`;

const Label = styled.h3`
    font-size: 1.5rem;
    color: #373737;
    line-height: 20px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 1.25rem;
    }

    @media (max-width: 600px) {
        font-size: 1.125rem;
    }
`;

const Paragraph = styled.p`
    font-size: 1.25rem;
    color: #000000;
    line-height: 30px;
    user-select: none;
    font-weight: 400;
    margin-top: 20px;

    @media (max-width: 770px) {
        font-size: 1.125rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
        line-height: 25px;
    }
`;

const SingleBlogPageView: FC = () => {
    const params = useParams();
    const { id } = params;

    const { t } = useTranslation('blog-page');

    const news = [
        {
            id: '1',
            title: t('InvestBlogCardTitle'),
            text: t('InvestBlogCardText'),
            img: InvestBlogCard,
            date: '04/05/2024',

            label: t('InvestBlogCard1Label'),
            texts: [
                t('InvestBlogCard1Text1'),
                t('InvestBlogCard1Text2'),
                t('InvestBlogCard1Text3'),
                t('InvestBlogCard1Text4'),
                t('InvestBlogCard1Text5'),
                t('InvestBlogCard1Text6'),
                t('InvestBlogCard1Text7'),
                t('InvestBlogCard1Text8'),
                t('InvestBlogCard1Text9'),
            ],
            label2: t('InvestBlogCard1Label2'),
            texts2: [
                t('InvestBlogCard1Text10'),

                t('InvestBlogCard1Text11'),
                t('InvestBlogCard1Text12'),

                t('InvestBlogCard1Text13'),
                t('InvestBlogCard1Text14'),

                t('InvestBlogCard1Text15'),
                t('InvestBlogCard1Text16'),

                t('InvestBlogCard1Text17'),
                t('InvestBlogCard1Text18'),
            ],
        },
        {
            id: '2',
            title: t('InvestBlogCardTitle2'),
            text: t('InvestBlogCardText2'),
            img: IPOBlogCard,
            date: '12/05/2024',

            texts: [
                t('InvestBlogCard2Text1'),
                t('InvestBlogCard2Text2'),
                t('InvestBlogCard2Text3'),
                t('InvestBlogCard2Text4'),
                t('InvestBlogCard2Text5'),
            ],

            label2: t('InvestBlogCard2Label'),
            texts2: [
                t('InvestBlogCard2Text6'),
                t('InvestBlogCard2Text7'),
                t('InvestBlogCard2Text8'),
                t('InvestBlogCard2Text9'),
                t('InvestBlogCard2Text10') + t('InvestBlogCard2Text11'),
            ],
        },
        {
            id: '3',
            title: t('InvestBlogCardTitle3'),
            text: t('InvestBlogCardText3'),
            img: Finansirovanie,
            date: '19/05/2024',

            label: t('InvestBlogCard3Label'),

            texts: [
                t('InvestBlogCard3Text1'),
                t('InvestBlogCard3Text2'),
                t('InvestBlogCard3Text3'),
                t('InvestBlogCard3Text4'),
                t('InvestBlogCard3Text5'),
            ],

            label2: t('InvestBlogCard3Label2'),
            texts2: [
                t('InvestBlogCard3Text6'),

                t('InvestBlogCard3Text7'),

                t('InvestBlogCard3Text8'),

                t('InvestBlogCard3Text9'),
            ],
        },
        {
            id: '4',
            title: t('InvestBlogCardTitle4'),
            text: t('InvestBlogCardText4'),
            img: pensia,
            date: '26/05/2024',

            label: t('InvestBlogCard4Label'),

            texts: [t('InvestBlogCard4Text1'), t('InvestBlogCard4Text2'), t('InvestBlogCard4Text3')],

            label2: t('InvestBlogCard4Label2'),
            texts2: [
                t('InvestBlogCard4Text4'),
                t('InvestBlogCard4Text5'),
                t('InvestBlogCard4Text6'),
                t('InvestBlogCard4Text7'),
                t('InvestBlogCard4Text8'),
                t('InvestBlogCard4Text9'),
                t('InvestBlogCard4Text10'),
            ],
        },
        {
            id: '5',
            title: t('InvestBlogCardTitle5'),
            text: t('InvestBlogCardText5'),
            img: RiskPortfelya,
            date: '30/05/2024',

            label: t('InvestBlogCard5Label'),

            texts: [
                t('InvestBlogCard5Text1'),
                t('InvestBlogCard5Text2'),
                t('InvestBlogCard5Text3'),
                t('InvestBlogCard5Text4'),
            ],

            label2: t('InvestBlogCard5Label2'),
            texts2: [
                t('InvestBlogCard5Text5'),
                t('InvestBlogCard5Text6'),
                t('InvestBlogCard5Text7'),
                t('InvestBlogCard5Text8'),
            ],
        },
        {
            id: '6',
            title: t('InvestBlogCardTitle6'),
            text: t('InvestBlogCardText6'),
            img: Individualnyj,
            date: '06/06/2024',

            label: t('InvestBlogCard6Label'),

            texts: [
                t('InvestBlogCard6Text1'),
                t('InvestBlogCard6Text2'),
                t('InvestBlogCard6Text3'),
                t('InvestBlogCard6Text4'),
                t('InvestBlogCard6Text5'),
            ],

            label2: t('InvestBlogCard6Label2'),
            texts2: [
                t('InvestBlogCard6Text6'),
                t('InvestBlogCard6Text7'),
                t('InvestBlogCard6Text8'),
                t('InvestBlogCard6Text9'),
                t('InvestBlogCard6Text10'),
                t('InvestBlogCard6Text11'),
                t('InvestBlogCard6Text12'),
                t('InvestBlogCard6Text13'),
            ],
        },
        {
            id: '7',
            title: t('InvestBlogCardTitle7'),
            text: t('InvestBlogCardText7'),
            img: Kapitalizatsiya,
            date: '09/06/2024',

            label: t('InvestBlogCard7Label'),

            texts: [
                t('InvestBlogCard7Text1'),
                t('InvestBlogCard7Text2'),
                t('InvestBlogCard7Text3'),
                t('InvestBlogCard7Text4'),
                t('InvestBlogCard7Text5'),
            ],
        },
        {
            id: '8',
            title: t('InvestBlogCardTitle8'),
            text: t('InvestBlogCardText8'),
            img: Lichnye,
            date: '13/06/2024',

            label: t('InvestBlogCard8Label'),

            texts: [
                t('InvestBlogCard7Text6'),
                t('InvestBlogCard7Text7'),
                t('InvestBlogCard7Text8'),
                t('InvestBlogCard7Text9'),
                t('InvestBlogCard7Text10'),
                t('InvestBlogCard7Text11'),
                t('InvestBlogCard7Text12'),
            ],
        },
        {
            id: '9',
            title: t('InvestBlogCardTitle9'),
            text: t('InvestBlogCardText9'),
            img: Plyusy,
            date: '20/06/2024',

            label: t('InvestBlogCard9Label'),

            texts: [t('InvestBlogCard9Text1'), t('InvestBlogCard9Text2'), t('InvestBlogCard9Text3')],

            label2: t('InvestBlogCard9Label2'),
            texts2: [
                t('InvestBlogCard9Text4'),
                t('InvestBlogCard9Text5'),
                t('InvestBlogCard9Text6'),
                t('InvestBlogCard9Text7'),
                t('InvestBlogCard9Text8'),
                t('InvestBlogCard9Text9'),
                t('InvestBlogCard9Text10'),
                t('InvestBlogCard9Text11'),
                t('InvestBlogCard9Text12'),
            ],
        },
    ];

    // const Imaaage = styled.img`
    //     width: 50%;
    //   margin-bottom: 20px;
    // `;

    const singleNews = news.find((news) => news.id === id);

    return (
        <Box
            sx={{
                background: 'transparent',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner>
                {singleNews && (
                    <Content>
                        {/* <Imaaage src={singleNews.img} alt=""/> */}
                        <Title>{singleNews.title} </Title>
                        <Paragraph>{singleNews.text}</Paragraph>
                        <Label>{singleNews.label}</Label>
                        {singleNews.texts?.map((text: any) => (
                            <Paragraph key={text}>
                                {text} <br /> <br />{' '}
                            </Paragraph>
                        ))}
                        <Label>{singleNews.label2}</Label>
                        {singleNews.texts2?.map((text: any) => (
                            <Paragraph key={text}>
                                {text} <br /> <br />{' '}
                            </Paragraph>
                        ))}
                    </Content>
                )}
            </Inner>
        </Box>
    );
};

export default SingleBlogPageView;
