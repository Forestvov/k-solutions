import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Title from '../title';
import Wrapper from './wrapper';

const LINK = 'https://t.me/ksolutions';

const TitleComponent = styled(Title)`
    margin: 0 0 12px 0;
`;

const Link = styled.a`
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 27px;
    letter-spacing: 0.1em;
    color: #373737;

    @media (min-width: 768px) {
        font-size: 1.275rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.375rem;
    }
`;

const TelegramSubscribe = () => {
    const { t } = useTranslation('personal');

    return (
        <Wrapper>
            <TitleComponent>{t('Хотите получать уведомления о новых сборах?')}</TitleComponent>
            <Typography variant="body1" sx={{ margin: { xs: '0 0 20px 0', sm: '0 0 42px 0' } }}>
                {t('Подпишитесь на наш телеграм канал и будьте всегда вкурсе выгодных предложений!')}
            </Typography>
            <Stack direction={{ sm: 'row' }} spacing={{ sm: '49px', xs: '20px' }} alignItems={{ sm: 'center' }}>
                <Link href={LINK} target="_blank">
                    {LINK}
                </Link>
                <Button href={LINK} target="_blank" variant="green">
                    {t('Подписаться')}
                </Button>
            </Stack>
        </Wrapper>
    );
};

export default TelegramSubscribe;
