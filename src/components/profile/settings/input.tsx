import { Controller, useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import type { HTMLInputTypeAttribute } from 'react';

const InputStyled = styled.input<{ error: boolean }>`
    outline-color: #d2d2d2;
    border: 1px solid #d2d2d2;
    padding: 0 29px;
    font-weight: 200;
    font-size: 20px;
    line-height: 24px;
    height: 60px;
    border-radius: 9px;
    width: 100%;

    ${({ error }) =>
        error &&
        `
    border-color: #FF5630`}

    &::placeholder {
        color: #7d7d7d;
    }

    @media (min-width: 768px) {
        height: 59px;
    }
`;

interface Props {
    name: string;
    placeholder: string;
    type?: HTMLInputTypeAttribute;
}

const ErrorMessage = styled.div`
    font-size: 14px;
    padding-left: 29px;
    color: #ff5630;
`;

const Input = ({ type = 'text', name, placeholder }: Props) => {
    const { control } = useFormContext();

    return (
        <Controller
            render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
                <Stack
                    spacing="5px"
                    sx={{
                        width: '100%',
                    }}
                >
                    <InputStyled
                        ref={ref}
                        value={value}
                        onChange={onChange}
                        type={type}
                        placeholder={placeholder}
                        error={Boolean(error)}
                    />
                    {error && <ErrorMessage>{error.message}</ErrorMessage>}
                </Stack>
            )}
            name={name}
            control={control}
        />
    );
};

export default Input;
