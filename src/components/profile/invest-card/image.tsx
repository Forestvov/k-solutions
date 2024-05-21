import styled from '@emotion/styled';

const ImageBox = styled.img`
    display: block;
    width: 100%;
    border-radius: 15px 15px 0 0;
    pointer-events: none;
    height: 150px;

    @media (min-width: 1280px) {
        height: 200px;
    }

    @media (min-width: 1668px) {
        height: 225px;
        border-radius: 35px 35px 0 0;
    }
`;

interface Image {
    image: string;
}

const Image = ({ image }: Image) => {
    return <ImageBox loading="lazy" src={image} />;
};

export default Image;
