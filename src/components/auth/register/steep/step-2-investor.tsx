import Stack from '@mui/material/Stack';

import TitleStep from './title-step';
import Input from './input';

const Step2Investor = () => {
    return (
        <div>
            <TitleStep>Введите Личные данные</TitleStep>
            <Stack spacing={{ xs: '20px', md: '30px' }}>
                <Stack justifyContent="space-between" direction={{ md: 'row' }} spacing={{ xs: '20px', md: '68px' }}>
                    <Input name="im" placeholder="Имя" />
                    <Input name="fam" placeholder="Фамилия" />
                </Stack>
                <Stack justifyContent="space-between" direction={{ md: 'row' }} spacing={{ xs: '20px', md: '68px' }}>
                    <Input name="userName" placeholder="Логин" />
                    <Input name="email" placeholder="E-mail" type="email" />
                </Stack>
            </Stack>
        </div>
    );
};

export default Step2Investor;
