import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        black: true;
        gray: true;
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
                    fontSize: '1.125rem',
                    lineHeight: '22px',
                    color: '#747474',
                },
            },
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
                            backgroundColor: '#363A3C',
                            borderColor: '#363A3C',
                        },
                        '&:active': {
                            backgroundColor: '#363A3C',
                            borderColor: '#363A3C',
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
            xs: 375,
            sm: 768,
            md: 1024,
            xl: 1280,
            lg: 1668,
        },
    },
});

export default theme;
