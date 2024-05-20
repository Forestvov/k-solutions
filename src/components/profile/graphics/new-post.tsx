import type { INewPost } from 'types/news';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const Image = styled.img`
    width: 200px;
    height: auto;
    display: block;
    object-fit: cover;
    transition: opacity 400ms ease;
    border-radius: 15px;

    @media (min-width: 768px) {
        width: 150px;
    }

    @media (min-width: 1024px) {
        width: 200px;
    }

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
    margin-top: 40px !important;
    text-decoration: none;
    color: #006838;
    width: fit-content;
    transition: color 400ms ease;

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
