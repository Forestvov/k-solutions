import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Link = styled(NavLink)`
    font-size: 1.125rem;
    text-decoration: none;
    color: #595959;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
        color: #006838;
    }
`;

const HeaderNavigation = () => {
    const { t } = useTranslation('main-navigation');

    console.log();

    return (
        <Stack spacing={{ lg: '40px', xl: '30px', xs: '15px' }} direction={{ xl: 'row' }} component="nav">
            <Link to="/">{t('investoram')}</Link>
            <Link to="/">{t('entrepreneurs')}</Link>
            <Link to="/">{t('about')}</Link>
            <Link to="/">{t('media')}</Link>
        </Stack>
    );
};
export default HeaderNavigation;
