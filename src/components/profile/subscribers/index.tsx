import Stack from '@mui/material/Stack';
import TelegramSubscribe from './telegram-subscribe';
import ConsultationSubscribe from './consultation-subscribe';

const Subscribers = () => {
    return (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing="30px" marginBottom="30px">
            <TelegramSubscribe />
            <ConsultationSubscribe />
        </Stack>
    );
};
export default Subscribers;
