import type { FC } from 'react';
import type { SxProps } from '@mui/system';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

const Icon = styled.div`
    flex: 0 0 auto;
    margin-right: 8px;
`;

const Text = styled.div`
    font-size: 0.875rem;
    line-height: 17px;
    color: #868686;
    letter-spacing: 0.015em;
`;

interface Prop {
    sx?: SxProps;
}

const Notification: FC<Prop> = ({ sx }) => {
    return (
        <Stack alignItems="flex-start" direction="row" sx={sx}>
            <Icon>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="8.5" stroke="#868686" />
                    <path
                        d="M9.27604 4L9.20833 11.3092H8.29167L8.22396 4H9.27604ZM8.75 14.321C8.54514 14.321 8.36806 14.2509 8.21875 14.1109C8.07292 13.9674 8 13.7973 8 13.6006C8 13.4005 8.07292 13.2304 8.21875 13.0903C8.36806 12.9502 8.54514 12.8802 8.75 12.8802C8.95486 12.8802 9.13021 12.9502 9.27604 13.0903C9.42535 13.2304 9.5 13.4005 9.5 13.6006C9.5 13.7306 9.46528 13.8507 9.39583 13.9608C9.32986 14.0708 9.23958 14.1592 9.125 14.2259C9.01389 14.2893 8.88889 14.321 8.75 14.321Z"
                        fill="#868686"
                    />
                </svg>
            </Icon>
            <Text>
                Срок займа - это период, на который ваши средства будут замороженны, в данный период вы не сможете
                пользоваться этими средствами. Средства будут зачисленны обратно на баланс после окончания срока займа.
            </Text>
        </Stack>
    );
};

export default Notification;
