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
    height: 43px;

    @media (min-width: 768px) {
        height: 59px;
    }

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
            spacing={{ sm: '50px', xs: '25px' }}
            direction={{ sm: 'row', xs: 'column' }}
            sx={{ marginBottom: { lg: '175px', md: '100px', sm: '140px', xs: '80px' } }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field: { ref, onChange, value } }) => (
                    <Input
                        ref={ref}
                        mask="+9 (999) 999-99-99"
                        value={value}
                        onChange={onChange}
                        placeholder="Введите номер телефона"
                    />
                )}
            />
            <Button sx={{ background: '#20836D', padding: { sm: '20px 45px', xs: '12px 40px' } }} type="submit">
                Заказать Звонок
            </Button>
        </Stack>
    );
};

export default Form;
