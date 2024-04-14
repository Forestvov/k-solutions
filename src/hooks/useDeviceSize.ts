import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface useDeviceSize {
    lg: boolean;
    xl: boolean;
    md: boolean;
    sm: boolean;
    xs: boolean;
}

const useDeviceSize = (): useDeviceSize => {
    const theme = useTheme();
    const lg = useMediaQuery(theme.breakpoints.up('lg'));
    const xl = useMediaQuery(theme.breakpoints.up('xl'));
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const sm = useMediaQuery(theme.breakpoints.up('sm'));
    const xs = useMediaQuery(theme.breakpoints.up('xs'));

    return { lg, xl, md, sm, xs };
};

export default useDeviceSize;
