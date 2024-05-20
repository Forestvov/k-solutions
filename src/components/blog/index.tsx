import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { BlogCard } from 'components/blog/blog-card';

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
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 70px;
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
`;

const Span = styled.span`
    font-size: 3rem;
    color: #006838;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 2.375rem;
    }
`;

const BlogList: FC = () => {
    const { t } = useTranslation('blog-page');

    const news = [
        {
            id: '1',
            title: t('InvestBlogCardTitle'),
            text: t('InvestBlogCardText'),
            img: InvestBlogCard,
            date: '04/05/2024',
        },
        {
            id: '2',
            title: t('InvestBlogCardTitle2'),
            text: t('InvestBlogCardText2'),
            img: IPOBlogCard,
            date: '12/05/2024',
        },
        {
            id: '3',
            title: t('InvestBlogCardTitle3'),
            text: t('InvestBlogCardText3'),
            img: Finansirovanie,
            date: '19/05/2024',
        },
        {
            id: '4',
            title: t('InvestBlogCardTitle4'),
            text: t('InvestBlogCardText4'),
            img: pensia,
            date: '26/05/2024',
        },
        {
            id: '5',
            title: t('InvestBlogCardTitle5'),
            text: t('InvestBlogCardText5'),
            img: RiskPortfelya,
            date: '30/05/2024',
        },
        {
            id: '6',
            title: t('InvestBlogCardTitle6'),
            text: t('InvestBlogCardText6'),
            img: Individualnyj,
            date: '06/06/2024',
        },
        {
            id: '7',
            title: t('InvestBlogCardTitle7'),
            text: t('InvestBlogCardText7'),
            img: Kapitalizatsiya,
            date: '09/06/2024',
        },
        {
            id: '8',
            title: t('InvestBlogCardTitle8'),
            text: t('InvestBlogCardText8'),
            img: Lichnye,
            date: '13/06/2024',
        },
        {
            id: '9',
            title: t('InvestBlogCardTitle9'),
            text: t('InvestBlogCardText9'),
            img: Plyusy,
            date: '20/06/2024',
        },
    ];

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
                <Title>
                    {t('blog')} <Span>KSOLUTION</Span>
                </Title>
                <Content>
                    {news.map((row: any) => (
                        <BlogCard key={row.id} news={row} />
                    ))}
                </Content>
            </Inner>
        </Box>
    );
};

export default BlogList;
