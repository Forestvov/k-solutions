import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const FooterLink = styled(NavLink)`
    font-size: 1.125rem;
    line-height: 24px;
    text-decoration: none;
    color: #444444;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
        color: #1e2021;
    }
`;

export default FooterLink;
