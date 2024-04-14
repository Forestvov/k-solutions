import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import OverviewIcon from 'assets/pages/personal/navigation/overview.svg?react';
import ResearchIcon from 'assets/pages/personal/navigation/research.svg?react';
import TeamsIcon from 'assets/pages/personal/navigation/teams.svg?react';
import TextIcon from 'assets/pages/personal/navigation/text.svg?react';
import UserIcon from 'assets/pages/personal/navigation/user.svg?react';

const Link = styled(NavLink)`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    color: #494949;
    transition:
        color 225ms ease-in-out,
        background 225ms ease-in-out;

    @media (min-width: 768px) {
        width: 48px;
        height: 48px;
    }

    &.active {
        background: #006838;
        color: #fff;
    }
`;

const Navigation = () => {
    return (
        <Stack
            spacing={{ xs: '15px', xl: '24px' }}
            marginBottom={{ xl: '30px' }}
            direction={{ xs: 'row', xl: 'column' }}
        >
            <Link to="/personal">
                <OverviewIcon />
            </Link>
            <Link to="/personal2">
                <ResearchIcon />
            </Link>
            <Link to="/personal3">
                <TeamsIcon />
            </Link>
            <Link to="/personal4">
                <TextIcon />
            </Link>
            <Link to="/personal5">
                <UserIcon />
            </Link>
        </Stack>
    );
};

export default Navigation;
