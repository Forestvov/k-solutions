import styled from '@emotion/styled';
import type { INewsStatic } from 'types/news';

const Cont = styled.div`
    width: 100%;
    background: #f6f7f8;
    padding: 25px;
    border-radius: 25px;
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;

    height: 137px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
`;

const Title = styled.h2`
    font-size: 22px;
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
        font-size: 38px;
    }
`;

interface BlogCardProps {
    news: INewsStatic;
}

export const SingleBlogCard = (props: BlogCardProps) => {
    const { news } = props;
    return (
        <Cont>
            <Title>{news.title}</Title>
            <Paragraph>{news.text}</Paragraph>
        </Cont>
    );
};
