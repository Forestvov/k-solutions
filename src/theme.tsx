import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontSize: 16,
        fontFamily: ['inter', 'sans-serif'].join(','),
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    '@media (min-width: 1280px)': {
                        maxWidth: '1200px',
                    },
                    '@media (min-width: 1668px)': {
                        maxWidth: '1620px',
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                body1: {
                    fontSize: '1rem',
                    lineHeight: '22px',
                    color: '#747474',

                    '@media (min-width: 768px)': {
                        fontSize: '1.125rem',
                    },
                },
                body2: {
                    fontSize: '1rem',
                    lineHeight: '22px',
                    color: '#747474',
                },
            },
            variants: [
                {
                    props: { variant: 'home-h2' },
                    style: {
                        marginBottom: '40px',
                        color: '#000000',
                        fontSize: '2rem',
                        lineHeight: '40px',

                        '@media (min-width: 768px)': {
                            marginBottom: '50px',
                            lineHeight: '58px',
                            fontSize: '2.5rem',
                        },

                        '@media (min-width: 1668px)': {
                            marginBottom: '60px',
                            fontSize: '3rem',
                        },
                    },
                },
            ],
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'black',
            },
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    textTransform: 'none',
                    borderRadius: '10px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
            },
            variants: [
                {
                    props: { variant: 'clear' },
                    style: {
                        background: 'transparent',
                        color: '#000',
                        padding: 0,
                    },
                },
                {
                    props: { variant: 'dark-green' },
                    style: {
                        background: '#20836D',
                        color: '#FFFFFF',
                        padding: '15px 45px',
                        fontSize: '.99rem',

                        '@media (min-width: 768px)': {
                            padding: '20px 45px',
                            fontSize: '1rem',
                        },

                        '&:hover': {
                            backgroundColor: '#20836D',
                            borderColor: '#20836D',
                        },
                        '&:active': {
                            backgroundColor: '#20836D',
                            borderColor: '#20836D',
                        },
                    },
                },
                {
                    props: { variant: 'green' },
                    style: {
                        background: '#20836D',
                        color: '#FFFFFF',
                        padding: '15px 45px',
                        fontSize: '.99rem',

                        '@media (min-width: 768px)': {
                            padding: '20px 45px',
                            fontSize: '1rem',
                        },

                        '&:hover': {
                            backgroundColor: '#006838',
                            borderColor: '#006838',
                        },
                        '&:active': {
                            backgroundColor: '#006838',
                            borderColor: '#006838',
                        },
                    },
                },
                {
                    props: { variant: 'black' },
                    style: {
                        background: '#1E2021',
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: '#006838',
                            borderColor: '#006838',
                        },
                        '&:active': {
                            backgroundColor: '#006838',
                            borderColor: '#006838',
                        },
                    },
                },
                {
                    props: { variant: 'gray' },
                    style: {
                        background: '#E9E9E9',
                        color: '#494949',
                        '&:hover': {
                            backgroundColor: '#D4D4D4',
                            borderColor: '#D4D4D4',
                        },
                        '&:active': {
                            backgroundColor: '#D4D4D4',
                            borderColor: '#D4D4D4',
                        },
                    },
                },
            ],
        },
    },
    breakpoints: {
        values: {
            xs: 320,
            sm: 768,
            md: 1024,
            xl: 1280,
            lg: 1668,
        },
    },
});

export default theme;
