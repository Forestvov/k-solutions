import { useEffect, useState } from 'react';

import type { BoxProps } from '@mui/material/Box';
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export default function SplashScreen({ sx, ...other }: BoxProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Box
            sx={{
                right: 0,
                width: 1,
                bottom: 0,
                height: 1,
                zIndex: 9998,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#006838',
                ...sx,
            }}
            {...other}
        >
            <div className="cube-wrapper">
                <div className="cube-folding">
                    <span className="leaf1" />
                    <span className="leaf2" />
                    <span className="leaf3" />
                    <span className="leaf4" />
                </div>
                <span className="loading" data-name="Loading">
                    Loading
                </span>
            </div>
        </Box>
    );
}
