import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import OverviewIcon from 'assets/pages/personal/navigation/overview.svg?react';
import ResearchIcon from 'assets/pages/personal/navigation/research.svg?react';
import TeamsIcon from 'assets/pages/personal/navigation/teams.svg?react';
import TextIcon from 'assets/pages/personal/navigation/text.svg?react';
import UserIcon from 'assets/pages/personal/navigation/user.svg?react';
import GraphicsIcon from 'assets/pages/personal/navigation/graphics.svg?react';

const Link = styled(NavLink)`
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

    @media (min-width: 1668px) {
        width: 48px;
        height: 48px;
        svg {
            transform: scale(1);
        }
    }

    &.active {
        background: #006838;
        color: #fff;
    }
`;

const Navigation = () => {
    const { userId } = useParams();

    if (userId) {
        return (
            <Stack
                spacing={{ xs: '15px', xl: '24px' }}
                marginBottom={{ xl: '30px' }}
                direction={{ xs: 'row', xl: 'column' }}
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
            spacing={{ xs: '15px', xl: '24px' }}
            marginBottom={{ xl: '30px' }}
            direction={{ xs: 'row', xl: 'column' }}
        >
            <Link to="/personal">
                <OverviewIcon />
            </Link>
            <Link to="/showcases">
                <ResearchIcon />
            </Link>
            <Link to="/balance">
                <TeamsIcon />
            </Link>
            <Link to="/finance">
                <TextIcon />
            </Link>
            <Link to="/graphics">
                <GraphicsIcon />
            </Link>
            <Link to="/settings">
                <UserIcon />
            </Link>
        </Stack>
    );
};

export default Navigation;
