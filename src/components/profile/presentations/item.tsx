import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import ImageSrc from 'assets/moc-card.png';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
    flex: 1;

    @media (min-width: 1668px) {
        max-width: 500px;
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
    border-radius: 20px 20px 0 0;
    height: 200px;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 280px;
    }
`;

const Content = styled(Stack)`
    padding: 20px 15px 25px;
    background: #f6f7f8;
    border-radius: 0 0 20px 20px;

    @media (min-width: 768px) {
        padding: 20px;
    }

    @media (min-width: 1280px) {
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

    @media (min-width: 768px) {
        font-size: 1.3rem;
        line-height: 29px;
        margin: 0 0 21px 0;
    }

    @media (min-width: 1280px) {
        font-size: 1.5rem;
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

    @media (min-width: 1280px) {
        font-size: 1.125rem;
    }
`;

const Date = styled.span`
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 17px;
    letter-spacing: 0.015em;
    color: #006838;

    @media (min-width: 768px) {
        font-size: 0.875rem;
    }
`;

const Item = () => {
    const { t } = useTranslation('personal');

    return (
        <Wrapper>
            <Image src={ImageSrc} />
            <Content>
                <Name>{t('Презентация финансовой аналитики платформы')} KSolutions.</Name>
                <Text>
                    {t(
                        'В данной презентации Вы можете подробно посмотреть полную финансовую аналитику нашей платформы.'
                    )}
                </Text>
                <Stack
                    direction={{ sm: 'row' }}
                    alignItems={{ sm: 'center' }}
                    spacing={{ sm: '18px', xs: '15px' }}
                    sx={{ marginTop: 'auto' }}
                >
                    <Button variant="green" href="/" target="_blank">
                        {t('Скачать Презентацию')}
                    </Button>
                    <Date>Апрель 13, 2024</Date>
                </Stack>
            </Content>
        </Wrapper>
    );
};

export default Item;
