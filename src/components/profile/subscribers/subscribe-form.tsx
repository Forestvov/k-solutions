import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from 'react-input-mask';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import validateSubscribe from 'helpers/validation/validateSubscribe';

interface Inputs {
    phone: string;
}

const Input = styled(InputMask)`
    border-radius: 10px;
    padding: 0 15px;
    border: 1px solid rgba(32, 131, 109, 0.5);
    width: 100%;
    flex-grow: 1;
    background: transparent;
    font-size: 1rem;
    line-height: 49px;
    outline: none;
    height: 49px;

    &::placeholder {
        color: rgba(89, 89, 89, 0.4);
    }

    @media (min-width: 768px) {
        height: 59px;
        line-height: 59px;
        max-width: 477px;
    }
`;

const SubscribeForm = () => {
    const resolver = yupResolver(validateSubscribe);

    const { control, handleSubmit } = useForm<Inputs>({
        // @ts-ignore
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
            direction={{ sm: 'row' }}
            spacing={{ sm: '30px', xs: '20px' }}
            alignItems={{ sm: 'center' }}
            component="form"
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
            <Button variant="green" sx={{ width: { sm: '278px' }, flex: '0 0 auto' }}>
                Заказать Консультацию
            </Button>
        </Stack>
    );
};

export default SubscribeForm;
