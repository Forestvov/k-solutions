import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import useDeviceSize from 'hooks/useDeviceSize';

import BurgerIcon from 'assets/burger-icon.svg?react';

import Navigation from '../navigation';
import Laggout from '../laggout';

const Wrapper = styled(Stack)<{ active: boolean }>`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    height: 80px;
    z-index: 22;
    box-shadow: -1px -9px 34px -15px rgba(0, 0, 0, 0.1);
    border-radius: 20px 20px 0 0;
    transition: transform 400ms ease-in;

    @media (max-width: 767px) {
        height: 100%;
        padding: 30px;
        transform: translateX(-100%);

        ${({ active }) => active && `transform: translateX(0);`}
    }
`;

const Button = styled.button`
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
`;

const LaggoutBlock = styled.div`
    button {
        transform: translateY(2.5px);
        color: #595959;
    }
`;

const Close = styled.button`
    height: 5px;
    width: 20px;
    background: #555555;
    border-radius: 3px;
    border: none;
    position: absolute;
    right: 20px;
    top: 15px;
`;

interface Props {
    showBurger?: boolean;
}

const Mobile = ({ showBurger }: Props) => {
    const [toggle, setToggle] = useState(false);
    const { xs, sm } = useDeviceSize();
    const { pathname } = useLocation();

    useEffect(() => {
        if (toggle) {
            setToggle(false);
        }
    }, [pathname]);

    return (
        <>
            {xs && !sm && showBurger && (
                <Button onClick={() => setToggle(true)}>
                    <BurgerIcon />
                </Button>
            )}
            <Wrapper
                active={toggle}
                direction={{
                    sm: 'row',
                }}
                justifyContent={{
                    sm: 'center',
                }}
                alignItems={{
                    sm: 'center',
                }}
                spacing={{ xs: '30px', sm: '15px' }}
            >
                <Navigation />
                <LaggoutBlock>
                    <Laggout />
                </LaggoutBlock>
                {xs && !sm && <Close onClick={() => setToggle(false)} />}
            </Wrapper>
        </>
    );
};

export default Mobile;
