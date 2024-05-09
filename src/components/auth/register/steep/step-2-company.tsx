import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';

import TitleStep from './title-step';
import Input from './input';

const Step2Company = () => {
    const { t } = useTranslation('auth');

    return (
        <div>
            <TitleStep>{t('Введите данные Компании')}</TitleStep>
            <Stack spacing={{ xs: '20px', md: '30px' }}>
                <Stack justifyContent="space-between" direction={{ md: 'row' }} spacing={{ xs: '20px', md: '68px' }}>
                    <Input name="companyName" placeholder={t('Наименование компании')} />
                </Stack>
                <Stack justifyContent="space-between" direction={{ md: 'row' }} spacing={{ xs: '20px', md: '68px' }}>
                    <Input name="famCeo" placeholder={t('ФИО генерального директора')} />
                    <Input name="numberCompany" placeholder={t('Номер компании')} />
                </Stack>
            </Stack>
        </div>
    );
};
export default Step2Company;
