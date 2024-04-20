import Stack from '@mui/material/Stack';
import CountrySelect from 'components/shared/country-select';
import CountryPhoneInput from 'components/shared/country-phone-input';

import TitleStep from './title-step';
import Input from './input';

const Step3Company = () => {
    return (
        <div>
            <TitleStep>Введите данные для регистрации</TitleStep>
            <Stack spacing={{ xs: '20px', md: '30px' }}>
                <Stack justifyContent="space-between" direction={{ md: 'row' }} spacing={{ xs: '20px', md: '68px' }}>
                    <CountrySelect name="country" />
                    <CountryPhoneInput name="phoneNumber" />
                </Stack>
                <Stack justifyContent="space-between" direction={{ md: 'row' }} spacing={{ xs: '20px', md: '68px' }}>
                    <Input name="email" placeholder="E-mail" type="email" />
                    <Input name="password" placeholder="Пароль" type="password" />
                </Stack>
            </Stack>
        </div>
    );
};

export default Step3Company;
