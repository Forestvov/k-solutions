import { useState } from 'react';
import styled from '@emotion/styled';

import Navigation from '../navigation';
import Profile from '../profile';
import Laggout from '../laggout';
import { Box } from '@mui/material';

interface Prop {
    slide: boolean;
}

const Aside = styled.aside<Prop>`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 100px);
    background: #fff;
    width: 80px;
    padding: 64px 10px 48px 10px;
    border-radius: 10px;
    position: fixed;
    left: 0;
    top: 100px;
    bottom: 0;
    z-index: 10;

    @media (min-width: 1668px) {
        width: 110px;
        padding: 64px 17px 48px 15px;
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
