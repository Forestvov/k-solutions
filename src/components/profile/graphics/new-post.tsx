import { useTranslation } from 'react-i18next';
import type { INewPost } from 'types/news';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Image = styled.img`
    width: 100px;
    height: auto;
    display: block;
    object-fit: cover;
    transition: opacity 400ms ease;
    border-radius: 15px;

    &:hover {
        opacity: 0.9;
    }
`;

const Title = styled.a`
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 25px;
    color: #000;
    text-decoration: none;
    transition: color 400ms ease;

    &:hover {
        color: #006838;
    }
`;

const More = styled.a`
    display: inline-block;
    margin-top: 20px !important;
    text-decoration: none;
    color: #006838;
    width: fit-content;
    transition: color 400ms ease;
    font-size: 15px;

    &:hover {
        color: #000;
    }
`;

const NewPost = ({ photo, title, url, descriptions }: INewPost) => {
    const { t } = useTranslation('personal');
    return (
        <Stack
            direction={{
                sm: 'row',
                xs: 'column',
            }}
            spacing="20px"
            sx={{
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(116, 116, 116, .4)',
            }}
        >
            <a href={url} target="_blank">
                <Image src={photo} />
            </a>
            <Stack
                spacing="10px"
                sx={{
                    paddingTop: '10px',
                }}
            >
                <Title href={url} target="_blank">
                    {title}
                </Title>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '15px !important',
                        maxWidth: '1100px',
                    }}
                >
                    {descriptions}
                </Typography>
                <More href={url} target="_blank">
                    {t('Подробнее')}
                </More>
            </Stack>
        </Stack>
    );
};

export default NewPost;
