import styled from '@emotion/styled';

import ImageSrc from 'assets/moc-card.png';

const ImageBox = styled.img`
    display: block;
    width: 100%;
    border-radius: 15px 15px 0 0;
    pointer-events: none;

    @media (min-width: 768px) {
        border-radius: 35px 35px 0 0;
    }
`;

const Image = () => {
    return <ImageBox src={ImageSrc} />;
};

export default Image;
