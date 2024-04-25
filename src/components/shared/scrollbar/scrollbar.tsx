import { forwardRef, memo } from 'react';

import type { ScrollbarProps } from './types';
import { StyledRootScrollbar, StyledScrollbar } from './styles';

// ----------------------------------------------------------------------

const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>(({ children, sx, ...other }, ref) => {
    return (
        // @ts-ignore
        <StyledRootScrollbar>
            <StyledScrollbar
                scrollableNodeProps={{
                    ref,
                }}
                clickOnTrack={false}
                sx={sx}
                {...other}
            >
                {children}
            </StyledScrollbar>
        </StyledRootScrollbar>
    );
});

export default memo(Scrollbar);
