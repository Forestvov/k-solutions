import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import Stack from '@mui/material/Stack';

import ButtonNavigation from '../button-navigation';
import type { FormState } from '../types';

import Step3Company from './step-3-company';
import Step3Investor from './step-3-investor';

interface Props {
    onPrev?: VoidFunction;
}

const Step3: FC<Props> = ({ onPrev }) => {
    const { getValues } = useFormContext<FormState>();
    const accountType = getValues('accountType');

    return (
        <Stack>
            {accountType === 'Investor' && <Step3Investor />}
            {accountType === 'Company' && <Step3Company />}
            <ButtonNavigation onPrev={onPrev} lastStep />
        </Stack>
    );
};

export default Step3;
