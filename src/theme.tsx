import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        black: true;
        gray: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        'home-h2': true;
    }
}

const theme = createTheme({
    typography: {
        fontSize: 16,
        fontFamily: ['inter', 'sans-serif'].join(','),
    },
    components: {
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
