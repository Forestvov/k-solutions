// @ts-nocheck

import type { FC } from 'react';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styled from '@emotion/styled';

import countries from './countries';

const Wrapper = styled(Autocomplete)`
    flex: 1;
    width: 100%;

    .css-kxykbc-MuiInputBase-root-MuiOutlinedInput-root {
        border: none !important;
    }

    .MuiOutlinedInput-root {
        border-radius: 9px;
        font-size: 1.125rem;
        font-weight: 400;
        padding-left: 55px;
        padding-right: 18px;
        height: 60px;
        border-color: #d2d2d2 !important;
        outline-color: #006838;

        &:hover .MuiOutlinedInput-notchedOutline {
            border-color: #d2d2d2;
        }

        .MuiAutocomplete-input {
            padding: 0;
        }
    }
`;

const InputWrapper = styled.div`
    position: relative;

    img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 18px;
    }
`;

interface Props {
    name: string;
}

const CountrySelect: FC<Props> = ({ name }) => {
    const [code, setCode] = useState(countries[189].code);
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
                <Wrapper
                    sx={{ width: 300 }}
                    options={countries}
                    defaultValue={countries[189]}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => {
                        onChange(value.label);
                        setCode(value.code);
                    }}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                alt=""
                            />
                            {option.label} ({option.code})
                        </Box>
                    )}
                    renderInput={(params) => (
                        <InputWrapper>
                            <img
                                loading="lazy"
                                width="20"
                                srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
                                src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
                                alt=""
                            />
                            <TextField
                                {...params}
                                placeholder="Страна"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password',
                                }}
                            />
                        </InputWrapper>
                    )}
                />
            )}
        />
    );
};

export default CountrySelect;
