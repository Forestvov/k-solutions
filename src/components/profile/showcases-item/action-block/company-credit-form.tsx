import { useState } from 'react';

import Button from '@mui/material/Button';
import InvestForm from './invest-form';

interface Props {
    updateBrief: VoidFunction;
}

const CompanyCreditForm = ({ updateBrief }: Props) => {
    const [openForm, setOpenForm] = useState(false);

    return openForm ? (
        <InvestForm companyType="Company" updateBrief={updateBrief} />
    ) : (
        <Button variant="dark-green" type="button" fullWidth onClick={() => setOpenForm(true)}>
            Кредитовать
        </Button>
    );
};

export default CompanyCreditForm;
