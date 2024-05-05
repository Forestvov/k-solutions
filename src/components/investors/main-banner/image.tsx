import styled from '@emotion/styled';

import Hands from 'assets/pages/investors/partners-main.png';

const ImageWrapper = styled.div`
    position: absolute;
    right: 41px;
    top: -30px;
    width: 50%;
    background: transparent;
`;

const Img = styled.img`
    margin-left: -5px;
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
