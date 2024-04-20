import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import Stack from '@mui/material/Stack';

import type { FormState } from '../types';
import ButtonNavigation from '../button-navigation';

import Step2Investor from './step-2-investor';
import Step2Company from './step-2-company';

interface Props {
    onPrev?: VoidFunction;
    onNext?: VoidFunction;
}

const Step2: FC<Props> = ({ onNext, onPrev }) => {
    const { getValues } = useFormContext<FormState>();
    const accountType = getValues('accountType');

    return (
        <Stack>
            {accountType === 'Investor' && <Step2Investor />}
            {accountType === 'Company' && <Step2Company />}
            <ButtonNavigation onPrev={onPrev} onNext={onNext} />
        </Stack>
    );
};

export default Step2;
