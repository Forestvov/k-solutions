import TitleStep from './title-step';
import Stack from '@mui/material/Stack';

import Input from './input';

const Step2Company = () => {
    return (
        <div>
            <TitleStep>Введите данные Компании</TitleStep>
            <Stack spacing={{ xs: '20px', md: '30px' }}>
                <Stack justifyContent="space-between" direction={{ md: 'row' }} spacing={{ xs: '20px', md: '68px' }}>
                    <Input name="companyName" placeholder="Наименование компании" />
                </Stack>
                <Stack justifyContent="space-between" direction={{ md: 'row' }} spacing={{ xs: '20px', md: '68px' }}>
                    <Input name="famCeo" placeholder="ФИО генерального директора" />
                    <Input name="numberCompany" placeholder="Номер компании" />
                </Stack>
            </Stack>
        </div>
    );
};
export default Step2Company;
