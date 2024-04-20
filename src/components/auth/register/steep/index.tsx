import type { FC } from 'react';
import type { FormState } from 'components/auth/register/types';

import { useFormContext } from 'react-hook-form';

import { validateStep2Company, validateStep2Investor } from '../validation-schema';
import { errorCatcher } from '../error-catcher';

import Step1 from './step-1';
import Step2 from './step-2';
import Step3 from './step-3';

interface Props {
    step: number;
    setStep: (step: number) => void;
}

const Steep: FC<Props> = ({ step, setStep }) => {
    const { trigger, getValues, setError } = useFormContext<FormState>();

    const handleNext = async (step: number) => {
        const accountType = getValues('accountType');
        const data = getValues();

        if (step === 2) {
            if (accountType === 'Investor') {
                try {
                    await validateStep2Investor.validate(data, { abortEarly: false });
                } catch (error) {
                    errorCatcher(error, setError);
                    return;
                }
            } else {
                try {
                    await validateStep2Company.validate(data, { abortEarly: false });
                } catch (error) {
                    errorCatcher(error, setError);
                    return;
                }
            }
        }

        if (await trigger()) setStep(step);
    };

    switch (step) {
        case 0:
            return <Step1 onNext={() => handleNext(1)} />;
        case 1:
            return <Step2 onPrev={() => setStep(0)} onNext={() => handleNext(2)} />;
        case 2:
            return <Step3 onPrev={() => setStep(1)} />;
        default:
            return 'Unknown step';
    }
};

export default Steep;
