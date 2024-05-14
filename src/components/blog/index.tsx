import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { BlogCard } from 'components/blog/blog-card';
import { news } from 'components/blog/singleBlogPage/news';

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
    gap: 30px;
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
                    Блог <Span>KSOLUTION</Span>
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
