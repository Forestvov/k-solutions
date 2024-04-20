import styled from '@emotion/styled';
import WhiteBox from '../white-box';
import Title from '../title';
import Form from './form';

const Wrapper = styled(WhiteBox)`
    padding: 54px 0 44px;
    max-width: 878px;
`;

const TitleComponent = styled(Title)`
    text-align: center;
    margin-bottom: 60px;
`;

const Login = () => {
    return (
        <Wrapper>
            <TitleComponent>Личный кабинет </TitleComponent>
            <Form />
        </Wrapper>
    );
};

export default Login;
