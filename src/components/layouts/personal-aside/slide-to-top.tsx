import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const ButtonTop = styled.button<{ show: boolean }>`
    padding: 0;
    margin: 0;
    background: transparent;
    border: none;
    position: absolute;
    top: 35px;
    left: 25px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    cursor: pointer;

    @media (min-width: 1668px) {
        left: 40px;
    }

    ${({ show }) =>
        show &&
        `
        opacity: 1;
       pointer-events: auto;
  `}
`;

const SlideToTop = () => {
    const [scrollYPosition, setScrollYPosition] = useState(0);

    const handleScroll = () => {
        const newScrollYPosition = window.pageYOffset;
        setScrollYPosition(newScrollYPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ButtonTop show={scrollYPosition > 70} onClick={() => window.scrollTo(0, 0)}>
            <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.2501 34.9556H29.083L23.7641 26.0053L18.4453 17.055L28.595 0.148926H17.7621L9.7594 14.0716V0.148926H0V34.9556H9.7594V20.0384L18.2501 34.9556ZM8.07188 2.31278L1.87093 2.2948V33.0268H8.07188V2.31278ZM18.5222 2.06382L10.6643 16.4255H16.8383L25.2575 2.06382H18.5222ZM25.8188 33.0851L16.8383 17.9574H10.4772L19.4576 33.0851H25.8188Z"
                    fill="#006838"
                />
            </svg>
        </ButtonTop>
    );
};

export default SlideToTop;
