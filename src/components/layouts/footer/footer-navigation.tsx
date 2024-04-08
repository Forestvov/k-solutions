import Stack from '@mui/material/Stack';

import FooterLink from './footer-link';

const FooterNavigation = () => {
    return (
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" maxWidth={420} width="100%">
            <Stack spacing="40px">
                <FooterLink to="/">Главная</FooterLink>
                <FooterLink to="/">Инвесторам</FooterLink>
                <FooterLink to="/">Предпринимателям</FooterLink>
            </Stack>
            <Stack spacing="40px">
                <FooterLink to="/">О платформе</FooterLink>
                <FooterLink to="/">Медиа</FooterLink>
                <FooterLink to="/">Личный Кабинет</FooterLink>
            </Stack>
        </Stack>
    );
};

export default FooterNavigation;
