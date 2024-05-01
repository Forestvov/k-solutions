import Form from './form';
import styled from '@emotion/styled';

import Title from '../title';
import WhiteBox from '../white-box';
import Typography from '@mui/material/Typography';

const Wrapper = styled(WhiteBox)`
    padding: 54px 0 44px;
    max-width: 878px;
`;

const TitleComponent = styled(Title)`
    text-align: center;
    margin-bottom: 30px;
`;

const Verify = () => {
    return (
        <Wrapper>
            <TitleComponent>Подтвердите почту</TitleComponent>
            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    maxWidth: '650px',
                    padding: '0 30px',
                    margin: '0 auto',
                }}
            >
                Мы отправили письмо вам на почту. Перейдите по ссылке чтобы активировать свой аккаунт.
            </Typography>
            <Form />
        </Wrapper>
    );
};

export default Verify;
