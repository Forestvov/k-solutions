import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import Title from '../title';
import WhiteBox from '../white-box';
import Form from './form';

const Wrapper = styled(WhiteBox)`
    padding: 54px 0 44px;
    max-width: 878px;
`;

const TitleComponent = styled(Title)`
    text-align: center;
    margin-bottom: 30px;
`;

const Restore = () => {
    const { t } = useTranslation('auth');

    const { token } = useParams();

    return (
        <Wrapper>
            <TitleComponent>{t('Восстановить пароль')}</TitleComponent>
            <Form token={token} />
        </Wrapper>
    );
};

export default Restore;
