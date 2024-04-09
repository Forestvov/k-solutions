import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';

import Video from 'assets/background.mp4';

const Player = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        let options = {
            rootMargin: '0px',
            threshold: [0.25, 0.75],
        };

        let handlePlay = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current?.play();
                } else {
                    videoRef.current?.pause();
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                // in if scope
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(videoRef.current);
            }
        };
    }, [videoRef]);

    return (
        <Box sx={{ background: '#F6F7F8' }}>
            <video ref={videoRef} src={Video} playsInline height={912} width="100%" preload="auto" loop muted />
        </Box>
    );
};

export default Player;
