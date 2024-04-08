import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Link = styled(NavLink)`
    font-size: 1.125rem;
    text-decoration: none;
    color: #595959;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
        color: #1e2021;
    }
`;

const HeaderNavigation = () => {
    return (
        <Stack spacing="40px" direction="row" component="nav">
            <Link to="/">Инвесторам</Link>
            <Link to="/">Предпринимателям</Link>
            <Link to="/">О платформе</Link>
            <Link to="/">Медиа</Link>
        </Stack>
    );
};
export default HeaderNavigation;
