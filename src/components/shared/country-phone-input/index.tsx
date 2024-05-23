import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import 'intl-tel-input/build/css/intlTelInput.min.css';
import 'https://cdn.jsdelivr.net/npm/intl-tel-input@21.2.4/build/js/utils.js';
import IntlTelInput from 'intl-tel-input/react';
import styled from '@emotion/styled';

const Wrapper = styled.div<{ error: boolean }>`
    flex: 1;

    .iti {
        height: 100%;
        width: 100%;
    }

    .iti__selected-dial-code {
        color: #000;
    }

    .iti__tel-input {
        width: 100%;
        height: 60px;
        border: 1px solid #d2d2d2;
        border-radius: 9px;
        padding: 0 18px;
        font-size: 1.25rem;
        font-family: Inter, serif;
        color: #000;
        outline-color: #006838;

        &::placeholder {
            color: #7d7d7d;
        }
    }

    .iti__selected-country {
        background: transparent;
        font-size: 1.25rem;
        font-family: Inter, serif;
    }

    ${({ error }) =>
        error &&
        ` 
        .iti__tel-input {
            border-color: #FF5630
        }
    `};
`;

interface Props {
    name: string;
}

const CountryPhoneInput: FC<Props> = ({ name }) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Wrapper error={Boolean(errors[name])}>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <IntlTelInput
                        initialValue={value}
                        onChangeNumber={onChange}
                        initOptions={{
                            initialCountry: 'ru',
                            strictMode: true,
                            showSelectedDialCode: true,
                        }}
                    />
                )}
            />
        </Wrapper>
    );
};
export default CountryPhoneInput;
