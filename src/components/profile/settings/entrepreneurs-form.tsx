import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';

import { upadteAccount } from 'api/user';

import Title from '../title';
import type { FormStateCompany } from './types';
import Input from './input';
import EntrepreneursFiles from './entrepreneurs-files';

// import { validateSecurity } from './validations';

const EntrepreneursForm = () => {
    // const resolver = yupResolver(validateSecurity);
    const { t } = useTranslation('personal');

    // @ts-ignore
    const { user, update } = useAuthContext();

    const methods = useForm<FormStateCompany>({
        mode: 'onChange',
        // resolver,
        defaultValues: {
            email: user?.email ?? '',
            companyName: user?.companyName ?? '',
            famCeo: user?.famCeo ?? '',
            numberPhone: user?.numberPhone ?? '',
            numberCompany: user?.numberCompany ?? '',
        },
    });

    const onSubmit = async (data: FormStateCompany) => {
        // @ts-ignore
        await upadteAccount(data);
        await update();
    };

    return (
        <FormProvider {...methods}>
            <Box
                sx={{
                    padding: {
                        xl: '30px',
                        xs: '15px',
                    },
                }}
            >
                <Stack
                    spacing={{
                        xl: '70px',
                        xs: '50px',
                    }}
                >
                    <Stack
                        spacing={{
                            xl: '60px',
                            xs: '30px',
                        }}
                        component="form"
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        <Title>{t('Информация о компании')}</Title>
                        <Stack spacing="30px">
                            <Stack
                                direction={{
                                    xl: 'row',
                                }}
                                spacing={{
                                    xl: '100px',
                                    xs: '30px',
                                }}
                                justifyContent="space-between"
                            >
                                <Input name="companyName" placeholder={t('Наименование компании')} />
                            </Stack>
                            <Stack
                                direction={{
                                    xl: 'row',
                                }}
                                spacing={{
                                    xl: '100px',
                                    xs: '30px',
                                }}
                                justifyContent="space-between"
                            >
                                <Input name="numberCompany" placeholder={t('Номер компании')} />
                                <Input name="famCeo" placeholder={t('ФИО директора')} />
                            </Stack>
                            <Stack
                                direction={{
                                    xl: 'row',
                                }}
                                spacing={{
                                    xl: '100px',
                                    xs: '30px',
                                }}
                                justifyContent="space-between"
                            >
                                <Input name="email" placeholder={t('Почта компании')} />
                                <Input name="numberPhone" placeholder={t('Номер телефона')} />
                            </Stack>
                        </Stack>
                        <Button
                            type="submit"
                            variant="green"
                            sx={{
                                width: '100%',
                                maxWidth: '400px',
                            }}
                        >
                            {t('Сохранить изменения')}
                        </Button>
                    </Stack>
                    <EntrepreneursFiles />
                </Stack>
            </Box>
        </FormProvider>
    );
};

export default EntrepreneursForm;
