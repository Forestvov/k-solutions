import styled from '@emotion/styled';

import Hands from 'assets/pages/aboutPlatformPage/about-page-mainBanner.png';

const ImageWrapper = styled.div`
    position: absolute;
    right: -120px;
    top: -220px;
    width: 50%;
    background: transparent;
`;

const Img = styled.img`
    width: 100%;
`;

const Image = () => {
    return (
        <ImageWrapper>
            <Img src={Hands} alt="hands" />
        </ImageWrapper>
    );
};

export default Image;
