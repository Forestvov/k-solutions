import { useEffect } from 'react';

const useLockBodyScroll = (shouldLock: boolean) => {
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        if (shouldLock) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [shouldLock]);
};

export default useLockBodyScroll;
