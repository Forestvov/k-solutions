import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import OverviewIcon from 'assets/pages/personal/navigation/overview.svg?react';
import ResearchIcon from 'assets/pages/personal/navigation/research.svg?react';
import TeamsIcon from 'assets/pages/personal/navigation/teams.svg?react';
import TextIcon from 'assets/pages/personal/navigation/text.svg?react';
import UserIcon from 'assets/pages/personal/navigation/user.svg?react';
import GraphicsIcon from 'assets/pages/personal/navigation/graphics.svg?react';

const Link = styled(NavLink)`
    position: relative;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    color: #494949;
    transition:
        color 225ms ease-in-out,
        background 225ms ease-in-out;

    svg {
        transform: scale(0.8);
    }

    span {
        display: none;
        position: absolute;
        left: 45px;
        top: 50%;
        transform: translateY(-50%);
        white-space: nowrap;
        color: #494949;
        font-size: 15px;
        text-transform: capitalize;
    }

    @media (min-width: 1668px) {
        width: 48px;
        height: 48px;
        svg {
            transform: scale(1);
        }
    }

    @media (max-width: 767px) {
        span {
            display: inline-block;
        }
    }

    &.active {
        background: #006838;
        color: #fff;
    }
`;

const Navigation = () => {
    const { t } = useTranslation('personal');
    const { userId } = useParams();

    if (userId) {
        return (
            <Stack
                spacing={{ xs: '15px', xl: '24px' }}
                marginBottom={{ xl: '30px' }}
                direction={{ sm: 'row', xl: 'column' }}
            >
                <Link to={`/${userId}/personal`}>
                    <OverviewIcon />
                </Link>
                <Link to={`/${userId}/showcases`}>
                    <ResearchIcon />
                </Link>
                <Link to={`/${userId}/balance`}>
                    <TeamsIcon />
                </Link>
                <Link to={`/${userId}/finance`}>
                    <TextIcon />
                </Link>
                <Link to={`/${userId}/graphics`}>
                    <GraphicsIcon />
                </Link>
                <Link to={`/${userId}/settings`}>
                    <UserIcon />
                </Link>
            </Stack>
        );
    }

    return (
        <Stack
            spacing={{ xs: '30px', sm: '24px' }}
            marginBottom={{ xl: '30px' }}
            direction={{ sm: 'row', xl: 'column' }}
        >
            <Link to="/personal">
                <OverviewIcon />
                <span>Dashboard</span>
            </Link>
            <Link to="/showcases">
                <ResearchIcon />
                <span>{t('Витрина')}</span>
            </Link>
            <Link to="/balance">
                <TeamsIcon />
                <span>{t('Финансы')}</span>
            </Link>
            <Link to="/finance">
                <TextIcon />
                <span>{t('Активы и аналитика')}</span>
            </Link>
            <Link to="/graphics">
                <GraphicsIcon />
                <span>{t('Рынки')}</span>
            </Link>
            <Link to="/settings">
                <UserIcon />
                <span>{t('Личная информация')}</span>
            </Link>
        </Stack>
    );
};

export default Navigation;
