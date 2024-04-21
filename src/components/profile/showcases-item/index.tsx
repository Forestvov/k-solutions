import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Banner from './banner';
import Slider from './slider';
import KeyInformation from './key-information';
import Info from './info';
import Awards from './awards';
import ActionBlock from './action-block';

const Wrapper = styled.div`
    padding: 0 15px 20px;
    background: #fff;
    border-radius: 35px;

    @media (min-width: 768px) {
        padding: 0 30px 30px;
    }

    @media (min-width: 1668px) {
        padding: 0 90px 90px;
    }
`;

const ShowcasesItem = () => {
    const theme = useTheme();
    const matchesDesktop = useMediaQuery(theme.breakpoints.up('xl'));
    const matchesMobile = useMediaQuery(theme.breakpoints.down('xl'));

    return (
        <Wrapper>
            <Banner />
            <Stack
                direction="row"
                spacing={{
                    lg: '60px',
                    xs: '30px',
                }}
                sx={{
                    marginTop: {
                        sm: '-140px',
                        xs: '-50px',
                    },
                }}
            >
                <Stack
                    spacing={{
                        lg: '60px',
                        xs: '30px',
                    }}
                >
                    <Slider />
                    {matchesMobile && <ActionBlock />}
                    <KeyInformation />
                    <Info />
                    <Awards />
                </Stack>
                {matchesDesktop && (
                    <Box
                        maxWidth={{
                            lg: '510px',
                            xs: '400px',
                        }}
                        flex="0 0 auto"
                        width="100%"
                    >
                        <ActionBlock />
                    </Box>
                )}
            </Stack>
        </Wrapper>
    );
};

export default ShowcasesItem;
