import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from 'react-input-mask';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { validateForm } from './helpers/validate-form';

interface Inputs {
    phone: string;
}

const Input = styled(InputMask)`
    border-radius: 10px;
    padding: 0 15px;
    border: 1px solid rgba(32, 131, 109, 0.5);
    max-width: 440px;
    flex-grow: 1;
    background: transparent;
    font-size: 1rem;
    outline: none;

    &::placeholder {
        color: rgba(89, 89, 89, 0.4);
    }
`;

const Form = () => {
    const resolver = yupResolver(validateForm);

    const { control, handleSubmit } = useForm<Inputs>({
        resolver,
        defaultValues: {
            phone: '',
        },
    });

    const onSubmit = (data: Inputs) => {
        alert(JSON.stringify(data));
    };

    return (
        <Stack
            component="form"
            spacing="50px"
            direction="row"
            sx={{ marginBottom: '175px' }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field: { ref: fieldRef, onChange, value } }) => (
                    <Input
                        ref={fieldRef}
                        mask="+9 (999) 999-99-99"
                        value={value}
                        onChange={onChange}
                        placeholder="Введите номер телефона"
                    />
                )}
            />
            <Button sx={{ background: '#20836D', padding: '20px 45px' }} type="submit">
                Заказать Звонок
            </Button>
        </Stack>
    );
};

export default Form;
