import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import InvestForm from './invest-form';

interface Props {
    updateBrief: VoidFunction;
}

const CompanyCreditForm = ({ updateBrief }: Props) => {
    const { t } = useTranslation('personal');

    const [openForm, setOpenForm] = useState(false);

    return openForm ? (
        <InvestForm companyType="Company" updateBrief={updateBrief} />
    ) : (
        <Button variant="dark-green" type="button" fullWidth onClick={() => setOpenForm(true)}>
            {t('Кредитовать')}
        </Button>
    );
};

export default CompanyCreditForm;
