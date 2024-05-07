import styled from '@emotion/styled';

import WhiteWrapper from 'components/profile/white-wrapper';

import Title from '../title';
import List from './list';
import Carousel from './carousel';

const TitleStyled = styled(Title)`
    margin: 20px 0 73px;
`;

const Graphics = () => {
    return (
        <WhiteWrapper>
            <TitleStyled>Рынки</TitleStyled>
            <List />
            <Carousel />
        </WhiteWrapper>
    );
};

export default Graphics;
