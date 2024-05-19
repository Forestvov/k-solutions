import styled from '@emotion/styled';

import BusinessMainImg from 'assets/pages/businessPage/businessMainBannerImage.png';

const ImageWrapper = styled.div`
    position: absolute;
    right: 75px;
    top: 10px;
    width: 380px;
`;

const Img = styled.img`
    margin-left: -5px;
`;

const Image = () => {
    return (
        <ImageWrapper>
            <Img src={BusinessMainImg} alt="phone" />
        </ImageWrapper>
    );
};

export default Image;
