import styled from '@emotion/styled';

const ImageWrapper = styled.div`
    position: absolute;
    right: 41px;
    bottom: -8px;
    width: 380px;
    background: #ffffff;
    border: 0.943329px solid #eeeeee;
    box-shadow: 66.0331px 94.3329px 188.666px rgba(0, 0, 0, 0.17);
    border-radius: 56.5998px;

    @media (min-width: 1280px) {
        width: 280px;
        img {
            width: 300px;
            height: auto;
        }
    }

    @media (min-width: 1668px) {
        width: 380px;
        img {
            width: auto;
            height: auto;
        }
    }
`;

const Img = styled.img`
    margin-left: -5px;
`;

const Image = () => {
    return (
        <ImageWrapper>
            <Img src="/images/iphone.png" loading="lazy" alt="phone" />
        </ImageWrapper>
    );
};

export default Image;
