import styled from '@emotion/styled';

import Phone from 'assets/pages/home/iphone.png';

const ImageWrapper = styled.div`
    position: absolute;
    right: 41px;
    bottom: -8px;
    width: 380px;
    background: #ffffff;
    border: 0.943329px solid #eeeeee;
    box-shadow: 66.0331px 94.3329px 188.666px rgba(0, 0, 0, 0.17);
    border-radius: 56.5998px;
`;

const Img = styled.img`
    margin-left: -5px;
`;

const Image = () => {
    return (
        <ImageWrapper>
            <Img src={Phone} alt="phone" />
        </ImageWrapper>
    );
};

export default Image;
