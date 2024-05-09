import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';

import useLockBodyScroll from 'hooks/useLockBodyScroll';

import HeaderNavigation from './header-navigation';
import HeaderButtons from './header-buttons';
import { useLocation } from 'react-router-dom';

interface Prop {
    active: boolean;
}

const Button = styled.button<Prop>`
    position: relative;
    z-index: 101;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 44px;
    height: 44px;
    padding: 10px;
    background: transparent;
    border: none;

    span {
        display: block;
        width: 24px;
        height: 2px;
        background: #7c7b7c;
        transform-origin: left;
        transition: transform 0.185s ease-in-out;
    }

    ${({ active }) =>
        active &&
        `
        span:first-of-type {
            width: 26px;
            transform:translate(3px,-4px) rotate(45deg);
        }
        span:nth-of-type(2) {
            display: none;
        }
         span:nth-of-type(3) {
            width: 26px;
            transform: translate(3px, 2px) rotate(-45deg);
        }
    `};
`;

const BurgerMenu = styled.div<Prop>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background: #fff;
    opacity: 0;
    transform: translateY(-100%);
    transition:
        opacity 225ms ease-in-out,
        transform 225ms ease-in-out;
    overflow-y: auto;

    ${({ active }) =>
        active &&
        `
            transform: translateY(0);
            opacity: 1
    `};
`;

export const HeaderBurger = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (isActive) {
            setIsActive(false);
        }
    }, [location]);

    useLockBodyScroll(isActive);

    return (
        <div>
            <Button active={isActive} onClick={() => setIsActive((prevState) => !prevState)}>
                <span />
                <span />
                <span />
            </Button>
            <BurgerMenu active={isActive}>
                <Container fixed sx={{ paddingTop: '80px', paddingBottom: '50px' }}>
                    <HeaderButtons hideLocalization />
                    <HeaderNavigation />
                </Container>
            </BurgerMenu>
        </div>
    );
};
