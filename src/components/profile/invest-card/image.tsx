import styled from '@emotion/styled';

const ImageBox = styled.img`
    display: block;
    width: 100%;
    border-radius: 15px 15px 0 0;
    pointer-events: none;
    height: 200px;

    @media (min-width: 768px) {
        border-radius: 35px 35px 0 0;
    }

    @media (min-width: 1668px) {
        height: 225px;
    }
`;

interface Image {
    image: string;
}

const Image = ({ image }: Image) => {
    return <ImageBox src={image} />;
};

export default Image;
