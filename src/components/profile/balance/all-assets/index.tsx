import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Title from '../../title';
import GrayWrapper from '../gray-wrapper';

import type { CurrencyType } from './types';
import CurrencyButtons from './currency-buttons';
import ItemInfo from './item-info';
import Replenish from './replenish';

const AllAssets = () => {
    const [currency, setCurrency] = useState<CurrencyType>('dollar');

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: { lg: '1100px' },
            }}
        >
            <GrayWrapper>
                <Stack spacing="39px">
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        alignItems={{
                            sm: 'center',
                        }}
                        justifyContent="space-between"
                        spacing={{
                            sm: '14px',
                            xs: '5px',
                        }}
                    >
                        <Title>Все активы</Title>
                        <CurrencyButtons currency={currency} onClick={setCurrency} />
                    </Stack>
                    <Stack
                        direction={{
                            md: 'row',
                        }}
                        spacing={{
                            md: '0',
                            xs: '30px',
                        }}
                        justifyContent="space-between"
                    >
                        <Stack
                            spacing={{
                                md: '50px',
                                xs: '20px',
                            }}
                        >
                            <ItemInfo label="Общий Баланс" value="$210,000.00" />
                            <ItemInfo label="Активы" value="$150,000.00" />
                            <ItemInfo label="Доступный Баланс" value="$60,000.00" />
                        </Stack>
                        <Stack
                            spacing={{
                                md: '50px',
                                xs: '20px',
                            }}
                            textAlign={{
                                md: 'right',
                            }}
                            alignItems={{
                                md: 'flex-end',
                            }}
                        >
                            <ItemInfo label="Ожидаемая доходность" value="37.24%" showIcon />
                            <ItemInfo label="Доходность" value="8.13 %" />
                            <Stack
                                direction={{
                                    sm: 'row',
                                }}
                                spacing={{
                                    sm: '30px',
                                    xs: '20px',
                                }}
                                sx={{ marginTop: { md: 'auto !important', xs: '30px !important' } }}
                            >
                                <Replenish />
                                <Button
                                    sx={{
                                        width: { md: 'auto', xs: '100%' },
                                        background: '#373737',
                                        padding: '16px 55px 15px',
                                    }}
                                >
                                    Вывести
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </GrayWrapper>
        </Box>
    );
};

export default AllAssets;
