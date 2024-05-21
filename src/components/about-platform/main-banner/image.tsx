import styled from '@emotion/styled';

import Hands from 'assets/pages/aboutPlatformPage/about-page-mainBanner.png';

const ImageWrapper = styled.div`
    position: absolute;
    right: -150px;
    top: -240px;
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
