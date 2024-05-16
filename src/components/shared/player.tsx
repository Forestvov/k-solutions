import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const VideoBlock = styled.video`
    width: 100%;
    height: auto;
    border-radius: 15px;

    @media (min-width: 768px) {
        border-radius: 35px;
    }
`;

interface Props {
    desktop: string;
    mobile: string;
}

const Player = ({ desktop, mobile }: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
    }, [videoRef, desktop, mobile]);

    return <VideoBlock ref={videoRef} src={isMobile ? mobile : desktop} playsInline preload="auto" loop muted />;
};

export default Player;
