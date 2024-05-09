import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

import ButtonNavigation from '../button-navigation';
import type { FormState } from '../types';

import Title from './title-step';

interface Props {
    onNext?: VoidFunction;
}

const DefaultButton = styled(Button)<{ active: boolean }>`
    padding: 15px 45px;
    border-radius: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    border: none;
    color: #494949;
    background: #e9e9e9;

    &:hover {
        background: #20836d;
        color: #fff;
    }

    ${({ active }) =>
        active &&
        `
          pointer-events: none;
          color: #fff;
          background: #006838;
    `};
`;

const Step1: FC<Props> = ({ onNext }) => {
    const { control } = useFormContext<FormState>();

    const { t } = useTranslation('auth');

    return (
        <Stack>
            <Title>{t('Выберите тип аккаунта')}</Title>
            <Stack
                direction={{ md: 'row' }}
                spacing={{ xs: '20px', md: '30px' }}
                justifyContent="center"
                marginTop="24px"
            >
                <Controller
                    render={({ field: { value, onChange } }) => (
                        <DefaultButton active={value === 'Investor'} onClick={() => onChange('Investor')}>
                            {t('Инвестор')}
                        </DefaultButton>
                    )}
                    name="accountType"
                    control={control}
                />
                <Controller
                    render={({ field: { value, onChange } }) => (
                        <DefaultButton active={value === 'Company'} onClick={() => onChange('Company')}>
                            {t('Предприниматель')}
                        </DefaultButton>
                    )}
                    name="accountType"
                    control={control}
                />
            </Stack>
            <ButtonNavigation onNext={onNext} />
        </Stack>
    );
};

export default Step1;
