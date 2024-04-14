import FlexWrapper from '../flex-wrapper';
import TelegramSubscribe from './telegram-subscribe';
import ConsultationSubscribe from './consultation-subscribe';

const Subscribers = () => {
    return (
        <FlexWrapper>
            <TelegramSubscribe />
            <ConsultationSubscribe />
        </FlexWrapper>
    );
};
export default Subscribers;
