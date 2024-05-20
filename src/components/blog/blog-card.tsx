import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import type { INewsStatic } from 'types/news';

const CondCard = styled.div`
    width: 470px;
    min-height: 280px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    gap: 45px;
    margin-bottom: 50px;

    background: #f6f7f8;
    padding: 25px;
    border-radius: 25px;
    transition: all 0.7s;

    @media (max-width: 1670px) {
        width: 370px;
    }

    @media (max-width: 420px) {
        width: 320px;
        gap: 30px;
        min-height: 200px;
        padding: 20px;
    }

    :hover {
        border-radius: 5px;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 1.125rem;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;

    height: 137px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;

    @media (max-width: 1670px) {
        max-width: 340px;
    }
`;

const BlogSingleLink = styled(NavLink)`
    text-decoration: none;
`;

const Title = styled.h2`
    font-size: 1.375rem;
    color: #006838;
    line-height: 30px;
    user-select: none;
    font-weight: 500;
    margin: 0;
    height: 94px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;

    @media (max-width: 400px) {
        font-size: 1.25rem;
    }
`;

const Span = styled.span`
    font-size: 1.375rem;
    color: #747474;
    line-height: 30px;
    user-select: none;
    font-weight: 500;
    margin: 0;
    max-width: 600px;
`;

const Img = styled.img`
    width: 100%;
`;

interface BlogCardProps {
    news: INewsStatic;
}

export const BlogCard = (props: BlogCardProps) => {
    const { news } = props;

    return (
        <BlogSingleLink to={`/singleBlog/${news.id}`}>
            <CondCard>
                <Img src={news.img} />
                <Title>{news.title}</Title>
                <Paragraph>{news.text}</Paragraph>
                <Span>{news.date}</Span>
            </CondCard>
        </BlogSingleLink>
    );
};
