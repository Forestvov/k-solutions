import { Controller, useFormContext } from 'react-hook-form';
import type { FC, HTMLInputTypeAttribute } from 'react';
import styled from '@emotion/styled';

import type { FormInputs } from '../types';

export interface InputProp {
    placeholder: string;
    type?: HTMLInputTypeAttribute;
    name: FormInputs;
}

const InputStyled = styled.input<{ error: boolean }>`
    line-height: 60px;
    flex: 1;
    border: 1px solid #d2d2d2;
    border-radius: 9px;
    height: 60px;
    outline-color: #006838;
    padding: 0 18px;
    font-size: 1.25rem;
    color: #000;

    &::placeholder {
        color: #7d7d7d;
    }

    ${({ error }) =>
        error &&
        ` 
        border-color: #FF5630
    `};
`;

const Input: FC<InputProp> = ({ placeholder, name, type = 'text' }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
                <InputStyled
                    name={name}
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    type={type}
                    placeholder={placeholder}
                    error={Boolean(error)}
                />
            )}
        />
    );
};

export default Input;
