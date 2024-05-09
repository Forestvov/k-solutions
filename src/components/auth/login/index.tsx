import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import WhiteBox from '../white-box';
import Title from '../title';
import Form from './form';

const Wrapper = styled(WhiteBox)`
    padding: 40px;
    max-width: 600px;

    @media (min-width: 1024px) {
        max-width: 878px;
        padding: 54px 0 44px;
    }
`;

const TitleComponent = styled(Title)`
    text-align: center;
    margin-bottom: 60px;
`;

const Login = () => {
    const { t } = useTranslation('auth');
    return (
        <Wrapper>
            <TitleComponent>{t('Личный кабинет')}</TitleComponent>
            <Form />
        </Wrapper>
    );
};

export default Login;
