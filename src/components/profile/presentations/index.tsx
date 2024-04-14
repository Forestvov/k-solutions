import styled from '@emotion/styled';

import WhiteWrapper from '../white-wrapper';
import Title from '../title';
import List from './list';

const Wrapper = styled(WhiteWrapper)`
    margin: 0 0 30px 0;
`;

const TitleComponent = styled(Title)`
    margin: 0 0 25px 0;

    @media (min-width: 768px) {
        margin: 0 0 47px 0;
    }
`;

const Presentations = () => {
    return (
        <Wrapper>
            <TitleComponent>Презентации платформы</TitleComponent>
            <List />
        </Wrapper>
    );
};

export default Presentations;
