import type { FC } from 'react';
import { useParams } from 'react-router';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { news } from './news';

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
                        <Title>{singleNews.title}</Title>
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
