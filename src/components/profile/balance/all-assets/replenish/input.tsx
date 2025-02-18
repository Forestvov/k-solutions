import styled from '@emotion/styled';
import { Controller, useFormContext } from 'react-hook-form';
import Mask from 'react-input-mask';
import type { FormState } from './types';
import type { HTMLInputTypeAttribute } from 'react';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const InputStyle = styled.input<{ pl: boolean; error: boolean; bankCard: boolean }>`
    color: #000;
    font-size: 16px;
    width: 100%;
    background-color: transparent;
    outline: none;

    ${({ bankCard }) =>
        bankCard
            ? `
                border-radius: 8px;
                height: 44px;
                border: 1px solid #D0D5DD;
                padding: 0 14px;
                `
            : `
                border-radius: 10px;
                height: 63px;
                border: 1px solid #20836d;
                padding: 0 22px;
                 
                 @media (min-width: 768px) {
                    height: 66px;
                 }
    `}

    ${({ pl }) =>
        pl &&
        `
    padding-left: 40px;
    `}

    ${({ error }) =>
        error &&
        ` 
        border-color: #FF5630
    `};

    &::placeholder {
        color: #838383;
    }
`;

const InputMaskStyle = styled(Mask)<{ pl: boolean; error: boolean; bankCard: boolean }>`
    color: #000;
    font-size: 16px;
    width: 100%;
    background-color: transparent;
    outline: none;

    ${({ bankCard }) =>
        bankCard
            ? `
                border-radius: 8px;
                height: 44px;
                border: 1px solid #D0D5DD;
                padding: 0 14px;`
            : `
                border-radius: 10px;
                height: 63px;
                border: 1px solid #20836d;
                padding: 0 22px;
                
                @media (min-width: 768px) {
                    height: 66px;
                 }
    
                 
    `}

    ${({ pl }) =>
        pl &&
        `
    padding-left: 40px;
    `}

    ${({ error }) =>
        error &&
        ` 
        border-color: #FF5630
    `};

    &::placeholder {
        color: #838383;
    }
`;

const Prefix = styled.span`
    position: absolute;
    left: 22px;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    align-content: center;
`;

const Label = styled.div`
    font-size: 16px;
    line-height: 19px;
    color: #696969;
    margin-bottom: 10px;
`;

const Error = styled.p`
    font-size: 14px;
    line-height: 19px;
    color: #ff5630;
    margin: 10px 0 0 !important;
`;

interface Prop {
    prefix?: any;
    name: keyof FormState;
    placeholder: string;
    label?: string;
    mask?: string;
    showError?: boolean;
    isBankCard?: boolean;
    type?: HTMLInputTypeAttribute;
    handleChange?: (value: string) => void;
}

const Input = ({
    placeholder,
    name,
    prefix,
    label,
    mask,
    isBankCard,
    type = 'text',
    handleChange,
    showError,
}: Prop) => {
    const { control } = useFormContext<FormState>();

    if (mask) {
        return (
            <div>
                {label && <Label>{label}</Label>}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
                        <InputMaskStyle
                            ref={ref}
                            bankCard={!!isBankCard}
                            mask={mask}
                            value={value}
                            pl={Boolean(value && prefix)}
                            onChange={(e) => {
                                onChange(e);
                                handleChange && handleChange(e.target.value);
                            }}
                            placeholder={placeholder}
                            error={Boolean(error)}
                            type={type}
                        />
                    )}
                />
            </div>
        );
    }

    return (
        <div>
            {label && <Label>{label}</Label>}
            <Controller
                render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
                    <>
                        <Wrapper>
                            {prefix && Boolean(value) && <Prefix>{prefix}</Prefix>}
                            <InputStyle
                                ref={ref}
                                bankCard={!!isBankCard}
                                pl={Boolean(value && prefix)}
                                placeholder={placeholder}
                                error={Boolean(error)}
                                type={type}
                                value={type === 'number' && value === 0 ? '' : value}
                                onChange={(event) => {
                                    if (type === 'number') {
                                        onChange(Number(event.target.value));
                                        handleChange && handleChange(event.target.value);
                                    } else {
                                        onChange(event.target.value);
                                        handleChange && handleChange(event.target.value);
                                    }
                                }}
                            />
                        </Wrapper>
                        {Boolean(error) && showError && <Error>{error?.message}</Error>}
                    </>
                )}
                name={name}
                control={control}
            />
        </div>
    );
};

export default Input;
