// @ts-nocheck
/* eslint-disable */
import type { FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Controller, useFormContext } from 'react-hook-form';

import type { FormState } from '../types';

import TitleStep from './title-step';
import DefaultForm from './default-form';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import MenuItem from '@mui/material/MenuItem';
import P2PForm from 'components/profile/balance/all-assets/replenish/step/p2p-form';

interface Props {
    onNext?: VoidFunction;
    transactionType?: 'In' | 'Out';
}

const Item = styled(MenuItem)`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    text-transform: uppercase;
`;

const BoxImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    flex: 0 0 auto;

    img {
        width: 100%;
        height: auto;
    }
`;

const TypeTransaction = [
    {
        image: "data:image/svg+xml,%3Csvg width='30' height='26' viewBox='0 0 30 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_323_12093)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.49352 0.127697L0.0234652 11.5748C0.00265005 11.6174 -0.00394613 11.6655 0.00464126 11.7121C0.0132286 11.7587 0.0365491 11.8013 0.0711922 11.8337L14.8445 25.9375C14.8865 25.9776 14.9423 26 15.0005 26C15.0586 26 15.1145 25.9776 15.1565 25.9375L29.9298 11.8346C29.9644 11.8022 29.9877 11.7596 29.9963 11.713C30.0049 11.6664 29.9983 11.6183 29.9775 11.5757L24.5075 0.128577C24.4898 0.090133 24.4614 0.0575657 24.4257 0.0347678C24.3899 0.0119699 24.3484 -9.43058e-05 24.3059 1.70407e-05H5.6968C5.65416 -0.000511432 5.61228 0.0112622 5.57621 0.0339176C5.54014 0.056573 5.51142 0.0891423 5.49352 0.127697Z' fill='%2350AF95'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16.8978 12.7504C16.7917 12.7583 16.2438 12.7909 15.0214 12.7909C14.0492 12.7909 13.3589 12.7618 13.1167 12.7504C9.35956 12.5857 6.55515 11.9341 6.55515 11.154C6.55515 10.3738 9.35956 9.72306 13.1167 9.55576V12.1014C13.3624 12.119 14.066 12.1604 15.0382 12.1604C16.2049 12.1604 16.7891 12.112 16.8943 12.1023V9.55752C20.6435 9.72394 23.4417 10.3755 23.4417 11.154C23.4417 11.9324 20.6444 12.584 16.8943 12.7495L16.8978 12.7504ZM16.8978 9.29423V7.01625H22.1301V3.54248H7.88444V7.01625H13.1159V9.29335C8.86373 9.48795 5.66602 10.3271 5.66602 11.3327C5.66602 12.3383 8.86373 13.1766 13.1159 13.3721V20.6718H16.8969V13.3694C21.1393 13.1748 24.3317 12.3365 24.3317 11.3318C24.3317 10.3271 21.142 9.48883 16.8969 9.29335L16.8978 9.29423Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_323_12093'%3E%3Crect width='30' height='26' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
        value: 'Token',
    },
    {
        image: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='15' fill='%23006838'/%3E%3Cpath d='M5.46875 18.5001V11.2274H8.60795C9.14773 11.2274 9.62003 11.3339 10.0249 11.547C10.4297 11.76 10.7446 12.0595 10.9695 12.4454C11.1944 12.8313 11.3068 13.2823 11.3068 13.7984C11.3068 14.3192 11.1908 14.7702 10.9588 15.1514C10.7292 15.5325 10.406 15.8261 9.98935 16.032C9.57505 16.238 9.09091 16.341 8.53693 16.341H6.66193V14.8069H8.1392C8.37121 14.8069 8.56889 14.7667 8.73224 14.6862C8.89796 14.6033 9.02462 14.4861 9.11222 14.3346C9.20218 14.1831 9.24716 14.0044 9.24716 13.7984C9.24716 13.5901 9.20218 13.4125 9.11222 13.2657C9.02462 13.1166 8.89796 13.0029 8.73224 12.9248C8.56889 12.8443 8.37121 12.8041 8.1392 12.8041H7.44318V18.5001H5.46875Z' fill='white'/%3E%3Cpath d='M12.0455 18.5001V17.0796L14.7585 14.8353C14.9384 14.6862 15.0923 14.5465 15.2202 14.4163C15.3504 14.2837 15.4498 14.1476 15.5185 14.0079C15.5895 13.8682 15.625 13.7132 15.625 13.5427C15.625 13.3557 15.5848 13.1959 15.5043 13.0633C15.4261 12.9307 15.3172 12.8289 15.1776 12.7579C15.0379 12.6845 14.8769 12.6478 14.6946 12.6478C14.5123 12.6478 14.3513 12.6845 14.2116 12.7579C14.0743 12.8313 13.9678 12.939 13.892 13.0811C13.8163 13.2231 13.7784 13.3959 13.7784 13.5995H11.9034C11.9034 13.0882 12.0182 12.6478 12.2479 12.2785C12.4775 11.9092 12.8018 11.6251 13.2209 11.4262C13.6399 11.2274 14.1312 11.1279 14.6946 11.1279C15.277 11.1279 15.7813 11.2214 16.2074 11.4085C16.6359 11.5931 16.9661 11.8535 17.1982 12.1897C17.4325 12.5259 17.5497 12.9201 17.5497 13.3722C17.5497 13.6516 17.4917 13.9298 17.3757 14.2068C17.2597 14.4814 17.0514 14.7856 16.7507 15.1194C16.45 15.4532 16.0227 15.8509 15.4688 16.3126L14.7869 16.8808V16.9234H17.6278V18.5001H12.0455Z' fill='white'/%3E%3Cpath d='M18.4961 18.5001V11.2274H21.6353C22.1751 11.2274 22.6474 11.3339 23.0522 11.547C23.457 11.76 23.7719 12.0595 23.9968 12.4454C24.2217 12.8313 24.3342 13.2823 24.3342 13.7984C24.3342 14.3192 24.2182 14.7702 23.9862 15.1514C23.7565 15.5325 23.4334 15.8261 23.0167 16.032C22.6024 16.238 22.1183 16.341 21.5643 16.341H19.6893V14.8069H21.1665C21.3986 14.8069 21.5962 14.7667 21.7596 14.6862C21.9253 14.6033 22.052 14.4861 22.1396 14.3346C22.2295 14.1831 22.2745 14.0044 22.2745 13.7984C22.2745 13.5901 22.2295 13.4125 22.1396 13.2657C22.052 13.1166 21.9253 13.0029 21.7596 12.9248C21.5962 12.8443 21.3986 12.8041 21.1665 12.8041H20.4705V18.5001H18.4961Z' fill='white'/%3E%3C/svg%3E%0A",
        value: 'p2p',
    },
    {
        image: "data:image/svg+xml,%3Csvg width='30' height='27' viewBox='0 0 30 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.3908 0.170391L7.46379 9.54106H4.90066L2.96953 2.0635C2.85064 1.60236 2.74904 1.43455 2.39256 1.23873C1.80861 0.923028 0.848086 0.626894 0 0.442441L0.0593555 0.170449H4.18313C4.70906 0.170449 5.18191 0.52125 5.3008 1.126L6.32191 6.54955L8.84402 0.170449L11.3908 0.170391ZM21.4306 6.48024C21.442 4.0084 18.0103 3.87387 18.035 2.76803C18.0417 2.43047 18.3616 2.07328 19.0622 1.98311C19.4102 1.93682 20.3677 1.90289 21.4529 2.40111L21.8782 0.414902C21.2943 0.202968 20.5438 0 19.611 0C17.2151 0 15.5285 1.27436 15.5143 3.09773C15.4986 4.44609 16.7176 5.19855 17.6371 5.64762C18.5813 6.10711 18.897 6.40049 18.8937 6.81258C18.8875 7.44152 18.1403 7.71639 17.4434 7.72875C16.2244 7.74774 15.5173 7.39934 14.9527 7.13637L14.5138 9.19084C15.0794 9.45053 16.1266 9.676 17.2103 9.6893C19.7568 9.68918 21.4226 8.42842 21.4306 6.48024ZM27.7575 9.54111H30L28.0433 0.170449H25.9731C25.5079 0.170449 25.1157 0.441739 24.941 0.857344L21.3057 9.54111H23.8502L24.3553 8.14166H27.4655L27.7575 9.54111ZM25.0526 6.22102L26.3291 2.70246L27.0635 6.22102H25.0526ZM14.855 0.170391L12.8493 9.54106H10.4248L12.4309 0.170391H14.855Z' fill='%231A2ADF'/%3E%3Cpath d='M11.4312 26.0246C14.5614 26.0246 17.0988 23.4871 17.0988 20.357C17.0988 17.2269 14.5614 14.6895 11.4312 14.6895C8.30113 14.6895 5.76367 17.2269 5.76367 20.357C5.76367 23.4871 8.30113 26.0246 11.4312 26.0246Z' fill='%23FF6041'/%3E%3Cpath d='M18.5699 26.0246C21.7 26.0246 24.2375 23.4871 24.2375 20.357C24.2375 17.2269 21.7 14.6895 18.5699 14.6895C15.4398 14.6895 12.9023 17.2269 12.9023 20.357C12.9023 23.4871 15.4398 26.0246 18.5699 26.0246Z' fill='%23FFD941'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.0027 15.9975C15.657 16.5262 16.1847 17.1945 16.5472 17.9536C16.9097 18.7127 17.0979 19.5432 17.0979 20.3844C17.0979 21.2256 16.9097 22.0561 16.5472 22.8152C16.1847 23.5742 15.657 24.2426 15.0027 24.7713C14.3436 24.2428 13.8116 23.573 13.446 22.8113C13.0804 22.0497 12.8906 21.2156 12.8906 20.3708C12.8906 19.5259 13.0804 18.6918 13.446 17.9302C13.8116 17.1685 14.3436 16.526 15.0027 15.9975Z' fill='%23FFD941'/%3E%3Cmask id='mask0_345_15516' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='12' y='15' width='6' height='10'%3E%3Cpath d='M15.0047 15.9975C15.6589 16.5262 16.1866 17.1945 16.5492 17.9536C16.9117 18.7127 17.0998 19.5432 17.0998 20.3844C17.0998 21.2256 16.9117 22.0561 16.5492 22.8152C16.1866 23.5742 15.6589 24.2426 15.0047 24.7713C14.3455 24.2428 13.8135 23.573 13.4479 22.8113C13.0824 22.0497 12.8926 21.2156 12.8926 20.3708C12.8926 19.5259 13.0824 18.6918 13.4479 17.9302C13.8135 17.1685 14.3455 16.526 15.0047 15.9975Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_345_15516)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.8711 17.0869H18.6286V17.8226H11.8711V17.0869ZM11.8711 18.5311H18.6286V19.2668H11.8711V18.5311ZM11.8711 20.0024H18.6286V20.7381H11.8711V20.0024ZM11.8711 21.4466H18.6286V22.1823H11.8711V21.4466ZM11.8711 22.8907H18.6286V23.6264H11.8711V22.8907Z' fill='%23FF6041'/%3E%3C/g%3E%3C/svg%3E%0A",
        value: 'Visa',
    },
];

const Step1: FC<Props> = ({ onNext, transactionType }) => {
    const { watch, control } = useFormContext<FormState>();

    const values = watch();

    return (
        <Box>
            <TitleStep>Выберите Платежную Систему</TitleStep>
            <Box
                sx={{
                    width: {
                        sm: '450px',
                        xs: '100%',
                    },
                    margin: '30px auto 0',
                }}
            >
                <Stack spacing="30px">
                    <Controller
                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                            <Select
                                variant="outlined"
                                sx={{
                                    width: '100%',
                                    height: {
                                        sm: '66px',
                                        xs: '60px',
                                    },
                                    outline: 'none',
                                    border: error ? '1px solid #FF5630 ' : '1px solid #20836D',
                                    borderRadius: '10px',
                                    fontSize: '16px',
                                    paddingLeft: '22px',
                                    paddingRight: '22px',
                                    color: '#838383',
                                    '.MuiSelect-select': {
                                        display: 'flex',
                                        alignItems: 'center',
                                        paddingLeft: 0,
                                    },
                                    '.MuiSelect-icon': {
                                        color: '#838383 !important',
                                    },
                                    '.MuiOutlinedInput-input': {
                                        textTransform: 'uppercase',
                                    },
                                    '.MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '& .MuiSvgIcon-root': {
                                        color: 'white',
                                    },
                                }}
                                IconComponent={() => (
                                    <svg
                                        width="20"
                                        height="11"
                                        viewBox="0 0 20 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1 1L10 10L19 1" stroke="#838383" strokeLinecap="round" />
                                    </svg>
                                )}
                                value={value}
                                onChange={(e) => onChange(e.target.value)}
                            >
                                {TypeTransaction.map((item, key) => (
                                    <Item value={item.value} key={key}>
                                        <BoxImage>
                                            <img src={item.image} alt={item.value} />
                                        </BoxImage>
                                        {item.value === 'Token' ? 'Crypto' : item.value}
                                    </Item>
                                ))}
                            </Select>
                        )}
                        name="transactionLinkType"
                        control={control}
                    />
                    {values.transactionLinkType === 'p2p' ? (
                        <P2PForm transactionType={transactionType} />
                    ) : (
                        <DefaultForm onNext={onNext} />
                    )}
                </Stack>
            </Box>
        </Box>
    );
};

export default Step1;
