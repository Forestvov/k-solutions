import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import { fDate } from 'helpers/format-time';
import type { INewPost } from 'types/news';

const Image = styled.div<{ bgSrc: string }>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex: 0 0 auto;

    ${({ bgSrc }) =>
        bgSrc &&
        `
        background-image: url(${bgSrc});
    `}

    &:hover {
        opacity: 0.9;
    }

    @media (min-width: 768px) {
        width: 200px;
        border-radius: 20px 0 0 20px;
    }

    @media (min-width: 1668px) {
        height: 310px;
        width: 230px;
    }
`;

const Content = styled(Stack)`
    background: #f6f7f8;
    border-radius: 0 0 20px 20px;
    padding: 20px;
    width: 100%;

    @media (min-width: 768px) {
        border-radius: 0 20px 20px 0;
        padding: 19px 15px 26px 20px;
    }
`;

const Title = styled.div`
    font-size: 1rem;
    line-height: 22px;
    letter-spacing: 0.015em;
    font-weight: 500;
    color: #373737;
    text-decoration: navajowhite;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    display: inline-block;
    margin-bottom: 10px;

    &:hover {
        color: #006838;
    }

    @media (min-width: 768px) {
        font-size: 1.125rem;
        margin-bottom: 20px;
    }
`;

const Text = styled.p`
    font-size: 0.8rem;
    font-weight: 300;
    color: #474747;
    line-height: 18px;
    letter-spacing: 0.015em;
    margin: 0 0 15px 0;

    @media (min-width: 768px) {
        font-size: 0.938rem;
        margin: 0 0 10px 0;
    }
`;

const Divider = styled.div<{ show: boolean }>`
    height: 1px;
    background: #cccccc;
    margin-bottom: 21px;

    ${({ show }) =>
        show &&
        `
        margin-top: auto;
    `}
`;

const Tag = styled.span`
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 17px;
    letter-spacing: 0.015em;
    color: #006838;

    @media (min-width: 768px) {
        font-size: 0.875rem;
    }
`;

const Dot = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #006838;
`;

const Link = styled.a`
    font-size: 14px;
    color: #006838;
    text-decoration: none;

    &:last-of-type {
        margin-top: auto;
        margin-bottom: 10px;
    }
`;

const Event = ({ createdDate, descriptions, newsType, photo, title, url, type }: INewPost) => {
    const { t } = useTranslation('personal');
    return (
        <Stack direction={{ sm: 'row' }} sx={{ width: '100%' }}>
            <Image bgSrc={photo} />
            <Content>
                {url && type === 'News' ? (
                    <Link href={url} target="_blank">
                        <Title>{title}</Title>
                    </Link>
                ) : (
                    <Title>{title}</Title>
                )}
                <Text>{descriptions}</Text>
                {url && type === 'News' && (
                    <Link href={url} target="_blank">
                        {t('Подробнее')}
                    </Link>
                )}
                <Divider show={!url} />
                <Stack direction="row" spacing="10px" alignItems="center">
                    <Tag>{newsType} </Tag>
                    <Dot />
                    <Tag>{fDate(createdDate, 'dd MMMM, yyyy')}</Tag>
                </Stack>
            </Content>
        </Stack>
    );
};

export default Event;
