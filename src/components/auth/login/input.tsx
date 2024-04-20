import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';

import type { InputProp } from './types';

const InputStyle = styled.input`
    display: block;
    width: 100%;
    height: 80px;
    border: 1px solid #d2d2d2;
    border-radius: 9px;
    padding: 0 25px;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 80px;
    letter-spacing: -0.02em;
    outline-color: #006838;
`;

const Input: FC<InputProp> = ({ type, placeholder, name }) => {
    const { register, control } = useFormContext();
    return (
        <Controller
            render={({ field: { onChange, value } }) => (
                <InputStyle
                    {...register(name)}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    type={type}
                />
            )}
            control={control}
            name={name}
        />
    );
};
export default Input;
