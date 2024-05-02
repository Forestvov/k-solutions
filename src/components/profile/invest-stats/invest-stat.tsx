import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import Icon from 'assets/pages/personal/check-circle.svg?react';
import type { FC } from 'react';
import { Tooltip } from '@mui/material';

const Label = styled.span`
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 0.9rem;
    letter-spacing: 0.015em;
    color: #000000;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

const Value = styled.span`
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.015em;
    color: #006838;

    @media (min-width: 768px) {
        text-align: right;
        font-size: 1.125rem;
    }
`;

const TooltipButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`;

interface Props {
    title: string;
    value: string;
    tooltip?: string;
}

const InvestStat: FC<Props> = ({ title, value, tooltip }) => {
    return (
        <Stack
            direction={{
                sm: 'row',
            }}
            alignItems={{
                sm: 'center',
            }}
            justifyContent={{
                sm: 'space-between',
            }}
            spacing={{
                sm: 0,
                xs: '10px',
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={{
                    sm: '7.63px',
                    xs: '5px',
                }}
            >
                <Icon />
                <Label>
                    {title}
                    {tooltip && (
                        <Tooltip title={tooltip} placement="bottom">
                            <TooltipButton>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="8" cy="8" r="7.5" stroke="#373737" />
                                    <path
                                        d="M7.23295 9.54545V9.49432C7.23864 8.9517 7.29545 8.51989 7.40341 8.19886C7.51136 7.87784 7.66477 7.6179 7.86364 7.41903C8.0625 7.22017 8.30114 7.03693 8.57955 6.86932C8.74716 6.76705 8.89773 6.64631 9.03125 6.5071C9.16477 6.36506 9.26989 6.2017 9.34659 6.01705C9.42614 5.83239 9.46591 5.62784 9.46591 5.40341C9.46591 5.125 9.40057 4.88352 9.26989 4.67898C9.1392 4.47443 8.96449 4.31676 8.74574 4.20597C8.52699 4.09517 8.28409 4.03977 8.01705 4.03977C7.78409 4.03977 7.55966 4.08807 7.34375 4.18466C7.12784 4.28125 6.94744 4.43324 6.80256 4.64062C6.65767 4.84801 6.57386 5.11932 6.55114 5.45455H5.47727C5.5 4.97159 5.625 4.55824 5.85227 4.21449C6.08239 3.87074 6.38494 3.60795 6.75994 3.42614C7.13778 3.24432 7.55682 3.15341 8.01705 3.15341C8.51705 3.15341 8.9517 3.25284 9.32102 3.4517C9.69318 3.65057 9.98011 3.9233 10.1818 4.26989C10.3864 4.61648 10.4886 5.01136 10.4886 5.45455C10.4886 5.76705 10.4403 6.04972 10.3438 6.30256C10.25 6.5554 10.1136 6.78125 9.93466 6.98011C9.75852 7.17898 9.54545 7.35511 9.29545 7.50852C9.04545 7.66477 8.84517 7.82955 8.6946 8.00284C8.54403 8.1733 8.43466 8.37642 8.36648 8.61222C8.2983 8.84801 8.26136 9.14205 8.25568 9.49432V9.54545H7.23295ZM7.77841 12.0682C7.56818 12.0682 7.38778 11.9929 7.23722 11.8423C7.08665 11.6918 7.01136 11.5114 7.01136 11.3011C7.01136 11.0909 7.08665 10.9105 7.23722 10.7599C7.38778 10.6094 7.56818 10.5341 7.77841 10.5341C7.98864 10.5341 8.16903 10.6094 8.3196 10.7599C8.47017 10.9105 8.54545 11.0909 8.54545 11.3011C8.54545 11.4403 8.50994 11.5682 8.43892 11.6847C8.37074 11.8011 8.27841 11.8949 8.16193 11.9659C8.0483 12.0341 7.92045 12.0682 7.77841 12.0682Z"
                                        fill="#373737"
                                    />
                                </svg>
                            </TooltipButton>
                        </Tooltip>
                    )}
                </Label>
            </Stack>
            <Value>{value}</Value>
        </Stack>
    );
};

export default InvestStat;
