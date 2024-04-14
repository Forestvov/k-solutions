import { useEffect, useRef } from 'react';

import Video from 'assets/background.mp4';
import styled from '@emotion/styled';

const VideoBlock = styled.video`
    width: 100%;
    height: auto;
    border-radius: 15px;

    @media (min-width: 768px) {
        border-radius: 35px;
    }
`;

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

    return <VideoBlock ref={videoRef} src={Video} playsInline preload="auto" loop muted />;
};

export default Player;
