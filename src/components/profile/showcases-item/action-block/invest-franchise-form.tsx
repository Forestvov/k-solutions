import { Controller, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Input = styled.input`
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: #000;
    text-align: center;
    height: 49px;
    border-radius: 10px;
    border: 1px solid #20836d;
    width: 100%;
    padding: 0 40px;

    outline-color: #20836d;

    &::placeholder {
        color: #838383;
    }

    @media (min-width: 768px) {
        height: 59px;
    }
`;

const Prefix = styled.span`
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
`;

interface Input {
    value: string;
}

const InvestFranchiseForm = () => {
    const validate = yup.object().shape({
        value: yup.number().required('Необходимо указать число'),
    });

    const resolver = yupResolver(validate);

    const methods = useForm<Input>({
        // @ts-ignore
        resolver,
        defaultValues: {
            value: '',
        },
    });

    const onSubmit = (data: Input) => {
        alert(JSON.stringify(data));
    };

    return (
        <FormProvider {...methods}>
            <Stack
                component="form"
                spacing="20px"
                sx={{ marginBottom: '20px' }}
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <Controller
                    render={({ field: { onChange, value } }) => (
                        <Wrapper>
                            <Input
                                {...methods.register('value')}
                                onChange={onChange}
                                value={value}
                                type="text"
                                placeholder="Введите сумму инвестиции ($)"
                            />
                            {value && <Prefix>$</Prefix>}
                        </Wrapper>
                    )}
                    control={methods.control}
                    name="value"
                />
                <Button variant="dark-green" type="submit" fullWidth>
                    Подтвердить
                </Button>
            </Stack>
        </FormProvider>
    );
};

export default InvestFranchiseForm;
