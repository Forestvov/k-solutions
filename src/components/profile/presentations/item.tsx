import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    border-radius: 20px 20px 0 0;
    height: 150px;
    object-fit: cover;

    @media (min-width: 1280px) {
        height: 200px;
    }

    @media (min-width: 1668px) {
        height: 225px;
    }
`;

const Content = styled(Stack)`
    flex: 1;
    padding: 20px;
    background: #f6f7f8;
    border-radius: 0 0 20px 20px;
    display: flex;
    flex-direction: column;

    @media (min-width: 1280px) {
        padding: 30px 20px;
    }

    @media (min-width: 1668px) {
        padding: 37px 30px 42px;
    }
`;

const Name = styled.h4`
    margin: 0 0 10px 0;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 26px;
    letter-spacing: 0.015em;
    color: #373737;

    @media (min-width: 1280px) {
        font-size: 1.2rem;
        line-height: 25px;
        margin: 0 0 21px 0;
    }

    @media (min-width: 1668px) {
        font-size: 1.4rem;
    }
`;

const Text = styled.p`
    margin: 0 0 20px 0;
    font-weight: 300;
    font-size: 0.8rem;
    line-height: 22px;
    letter-spacing: 0.015em;
    color: #454545;

    @media (min-width: 768px) {
        font-size: 1rem;
        margin: 0 0 37px 0;
    }

    @media (min-width: 1668px) {
        font-size: 17px;
    }
`;

const Date = styled.span`
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 17px;
    letter-spacing: 0.015em;
    color: #006838;
    order: -1;
    margin-bottom: 12px !important;
    display: block;

    @media (min-width: 768px) {
        font-size: 0.875rem;
    }

    @media (min-width: 1668px) {
        margin-bottom: 0 !important;
        order: 1;
    }
`;

interface Prop {
    title: string;
    text: string;
    file: string;
    date: string;
    image: string;
}

const Item = ({ text, file, date, title, image }: Prop) => {
    const { t } = useTranslation('personal');

    return (
        <Wrapper>
            <Image src={image} />
            <Content>
                <Name>{title}</Name>
                <Text>{text}</Text>
                <Stack
                    direction={{ lg: 'row' }}
                    alignItems={{ lg: 'center' }}
                    spacing={{ lg: '18px', xs: '15px' }}
                    sx={{ marginTop: 'auto' }}
                >
                    <Button variant="green" href={file} download={title}>
                        {t('Скачать Презентацию')}
                    </Button>
                    <Date>{date}</Date>
                </Stack>
            </Content>
        </Wrapper>
    );
};

export default Item;
