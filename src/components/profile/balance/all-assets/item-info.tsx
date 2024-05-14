import type { FC } from 'react';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

interface Prop {
    label: string;
    value: string;
    showIcon?: boolean;
}

const Label = styled.div`
    font-size: 16px;
    line-height: 20px;
    color: #747474;

    @media (min-width: 1024px) {
        line-height: 22px;
        font-size: 18px;
    }
`;

const Value = styled(Stack)`
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: #373737;

    @media (min-width: 768px) {
        font-size: 34px;
        line-height: 44px;
    }

    @media (min-width: 1024px) {
        font-size: 33px;
        line-height: 54px;
        letter-spacing: -1.6px;
    }

    @media (min-width: 1668px) {
        font-size: 42px;
        line-height: 58px;
        letter-spacing: 1px;
    }
`;

const ItemInfo: FC<Prop> = ({ value, label, showIcon }) => {
    return (
        <Stack spacing="10px">
            <Label>{label}</Label>
            <Value
                direction={showIcon ? 'row' : 'column'}
                spacing="20px"
                sx={{
                    alignItems: showIcon ? 'center' : '',
                }}
            >
                {showIcon && (
                    <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M34.9862 2.41667C35.0046 2.28311 35.0046 2.14772 34.9862 2.01417C34.9693 1.90164 34.9366 1.79198 34.889 1.68833C34.8377 1.59466 34.7792 1.50496 34.7141 1.42C34.6402 1.29878 34.5485 1.18898 34.442 1.09417L34.2088 0.96C34.0966 0.8775 33.972 0.812829 33.8395 0.768333H33.4508C33.3324 0.655241 33.1941 0.564319 33.0427 0.5H23.3253C22.2519 0.5 21.3818 1.35812 21.3818 2.41667C21.3818 3.47521 22.2519 4.33333 23.3253 4.33333H28.8253L21.0514 13.3608L12.6555 8.435C11.834 7.95312 10.7791 8.13192 10.1679 8.85667L0.450429 20.3567C0.119921 20.7478 -0.0391862 21.2526 0.00821366 21.7596C0.0556135 22.2666 0.305625 22.7342 0.703082 23.0592C1.05274 23.3449 1.49281 23.5009 1.94691 23.5C2.52497 23.5009 3.07344 23.248 3.4434 22.81L12.0919 12.575L20.3906 17.4817C21.2032 17.957 22.2447 17.7871 22.8588 17.0792L31.0992 7.59167V12C31.0992 13.0585 31.9694 13.9167 33.0427 13.9167C34.1161 13.9167 34.9862 13.0585 34.9862 12V2.41667Z"
                            fill="#00A76F"
                        />
                    </svg>
                )}
                <span>{value}</span>
            </Value>
        </Stack>
    );
};

export default ItemInfo;
