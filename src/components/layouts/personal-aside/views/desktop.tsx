import { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import Navigation from '../navigation';
import Profile from '../profile';
import Laggout from '../laggout';
import SlideToTop from '../slide-to-top';

interface Prop {
    slide: boolean;
}

const Aside = styled.aside<Prop>`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background: #fff;
    width: 80px;
    padding: 115px 10px 48px 10px;
    border-radius: 10px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;

    @media (min-width: 1668px) {
        width: 110px;
        padding: 115px 17px 48px 15px;
    }

    ${({ slide }) =>
        slide &&
        `
    `};
`;

const Overlay = styled.div<Prop>`
    width: 80px;
    margin-left: 0 !important;
    flex: 0 0 auto;

    @media (min-width: 1668px) {
        width: 110px;
    }

    ${({ slide }) =>
        slide &&
        `
    `};
`;

const Desktop = () => {
    const [slide] = useState(false);

    return (
        <>
            <Aside slide={slide}>
                <SlideToTop />
                <Navigation />
                <Box sx={{ marginTop: 'auto' }} />
                {/* <Expander onClick={() => setSlide(!slide)} /> */}
                <Profile />
                <Laggout />
            </Aside>
            <Overlay slide={slide} />
        </>
    );
};

export default Desktop;
