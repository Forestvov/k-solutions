import Stack from '@mui/material/Stack';

import FooterLink from './footer-link';

const FooterNavigation = () => {
    return (
        <Stack
            direction={{ sm: 'row' }}
            spacing={{ sm: '0', xs: '20px' }}
            alignItems="flex-start"
            justifyContent="space-between"
            maxWidth={{
                lg: '420px',
                md: '370px',
                xs: '420px',
            }}
            width="100%"
        >
            <Stack spacing={{ lg: '40px', xs: '20px' }}>
                <FooterLink to="/">Главная</FooterLink>
                <FooterLink to="/">Инвесторам</FooterLink>
                <FooterLink to="/">Предпринимателям</FooterLink>
            </Stack>
            <Stack spacing={{ lg: '40px', xs: '20px' }}>
                <FooterLink to="/">О платформе</FooterLink>
                <FooterLink to="/">Медиа</FooterLink>
                <FooterLink to="/">Личный Кабинет</FooterLink>
            </Stack>
        </Stack>
    );
};

export default FooterNavigation;
