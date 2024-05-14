import { useTranslation } from 'react-i18next';
import Stack from '@mui/material/Stack';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';

import FooterLink from './footer-link';

const FooterNavigation = () => {
    const { t } = useTranslation('main-navigation');
    // @ts-ignore
    const { authenticated } = useAuthContext();

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
                <FooterLink to="/">{t('home')}</FooterLink>
                <FooterLink to="/investors">{t('investoram')}</FooterLink>
                <FooterLink to="/business">{t('entrepreneurs')}</FooterLink>
            </Stack>
            <Stack spacing={{ lg: '40px', xs: '20px' }}>
                <FooterLink to="/aboutPlatform">{t('about')}</FooterLink>
                <FooterLink to="/blog">{t('media')}</FooterLink>
                <FooterLink to={authenticated ? '/personal' : '/login'}>{t('lc')}</FooterLink>
            </Stack>
        </Stack>
    );
};

export default FooterNavigation;
