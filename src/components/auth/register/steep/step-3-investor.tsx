import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';

import CountrySelect from 'components/shared/country-select';
import CountryPhoneInput from 'components/shared/country-phone-input';

import TitleStep from './title-step';
import Input from './input';

const Step3Investor = () => {
    const { t } = useTranslation('auth');

    return (
        <div>
            <TitleStep>{t('Введите номер телефона и пароль')}</TitleStep>
            <Stack spacing={{ xs: '20px', md: '30px' }}>
                <Stack justifyContent="space-between" direction={{ md: 'row' }} spacing={{ xs: '20px', md: '68px' }}>
                    <CountrySelect name="country" />
                    <CountryPhoneInput name="phoneNumber" />
                </Stack>
                <Stack justifyContent="space-between" direction={{ md: 'row' }} spacing={{ xs: '20px', md: '68px' }}>
                    <Input name="password" placeholder={t('Пароль')} type="password" />
                    <Input name="confirmPassword" placeholder={t('Подтверждение пароля')} type="password" />
                </Stack>
            </Stack>
        </div>
    );
};

export default Step3Investor;
