import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

import Title from '../title';
import Wrapper from './wrapper';
import SubscribeForm from './subscribe-form';

const TitleComponent = styled(Title)`
    margin: 0 0 12px 0;
`;

const ConsultationSubscribe = () => {
    return (
        <Wrapper>
            <TitleComponent>Нужна консультация ?</TitleComponent>
            <Typography variant="body1" sx={{ margin: { xs: '0 0 20px 0', sm: '0 0 42px 0' } }}>
                Оставьте заявку и наш специалист свяжется с вами!
            </Typography>
            <SubscribeForm />
        </Wrapper>
    );
};

export default ConsultationSubscribe;
