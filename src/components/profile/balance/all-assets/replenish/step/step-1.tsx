// @ts-nocheck
/* eslint-disable */
import type { FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { GenerateTransactionType } from 'components/shared/generate-transaction-type';

import type { FormState } from '../types';

import TitleStep from './title-step';
import DefaultForm from './default-form';
import { TypeTransaction } from './data';

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

const Step1: FC<Props> = ({ onNext, transactionType }) => {
    const { t } = useTranslation('personal');

    const { watch, control } = useFormContext<FormState>();

    const values = watch();

    return (
        <Box>
            <TitleStep>{t('Выберите Платежную Систему')}</TitleStep>
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
                                        <GenerateTransactionType type={item.value} />
                                    </Item>
                                ))}
                            </Select>
                        )}
                        name="transactionLinkType"
                        control={control}
                    />
                    <DefaultForm onNext={onNext} />
                </Stack>
            </Box>
        </Box>
    );
};

export default Step1;
