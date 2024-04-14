import '@mui/material/Button';
import '@mui/material/Typography';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        green: true;
        black: true;
        gray: true;
        clear: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        'home-h2': true;
    }
}
