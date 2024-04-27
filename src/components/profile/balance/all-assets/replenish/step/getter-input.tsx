import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

const Label = styled.div`
    font-size: 16px;
    line-height: 19px;
    color: #696969;
    margin-bottom: 10px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #838383;
    height: 66px;
    padding: 0 22px;
    border: 1px solid #20836d;
    border-radius: 10px;
    margin-bottom: 10px;

    span {
        margin-left: 10px;
    }
`;

const Notification = styled.div`
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #696969;
`;

const Value = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #373737;
`;

const GetterInput = () => {
    return (
        <div>
            <Label>Получаете </Label>
            <Item>
                <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_342_13686)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.49254 0.127697L0.0224886 11.5748C0.00167349 11.6174 -0.00492269 11.6655 0.0036647 11.7121C0.0122521 11.7587 0.0355725 11.8013 0.0702157 11.8337L14.8435 25.9375C14.8855 25.9776 14.9414 26 14.9995 26C15.0577 26 15.1135 25.9776 15.1555 25.9375L29.9288 11.8346C29.9634 11.8022 29.9868 11.7596 29.9954 11.713C30.0039 11.6664 29.9973 11.6183 29.9765 11.5757L24.5065 0.128577C24.4888 0.090133 24.4604 0.0575657 24.4247 0.0347678C24.389 0.0119699 24.3474 -9.43058e-05 24.305 1.70407e-05H5.69582C5.65319 -0.000511432 5.61131 0.0112622 5.57524 0.0339176C5.53917 0.056573 5.51045 0.0891423 5.49254 0.127697Z"
                            fill="#50AF95"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.8978 12.7504C16.7917 12.7583 16.2438 12.7909 15.0214 12.7909C14.0492 12.7909 13.3589 12.7618 13.1167 12.7504C9.35956 12.5857 6.55515 11.9341 6.55515 11.154C6.55515 10.3738 9.35956 9.72306 13.1167 9.55576V12.1014C13.3624 12.119 14.066 12.1604 15.0382 12.1604C16.2049 12.1604 16.7891 12.112 16.8943 12.1023V9.55752C20.6435 9.72394 23.4417 10.3755 23.4417 11.154C23.4417 11.9324 20.6444 12.584 16.8943 12.7495L16.8978 12.7504ZM16.8978 9.29423V7.01625H22.1301V3.54248H7.88444V7.01625H13.1159V9.29335C8.86373 9.48795 5.66602 10.3271 5.66602 11.3327C5.66602 12.3383 8.86373 13.1766 13.1159 13.3721V20.6718H16.8969V13.3694C21.1393 13.1748 24.3317 12.3365 24.3317 11.3318C24.3317 10.3271 21.142 9.48883 16.8969 9.29335L16.8978 9.29423Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_342_13686">
                            <rect width="30" height="26" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <span>Tether TRC20</span>
            </Item>
            <Stack direction="row" alignItems="baseline" spacing="10px">
                <Notification>Курс :</Notification>
                <Value>$1 = 105.98₽</Value>
            </Stack>
        </div>
    );
};

export default GetterInput;
