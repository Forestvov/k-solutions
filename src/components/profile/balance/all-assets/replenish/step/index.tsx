import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import errorCatcher from '../error-catcher';
import { validationSchemaStep1 } from '../validation-schema';

import Step1 from './step-1';
import Step3 from './step-3';
import Step4 from './step-4';
import Step2 from 'components/profile/balance/all-assets/replenish/step/step-2';

interface Props {
    step: number;
    setStep: (step: number) => void;
    onClose: VoidFunction;
    onSetMarkAsPaid: VoidFunction;
    transactionType?: 'In' | 'Out';
}

const Step: FC<Props> = ({ step, setStep, onClose, onSetMarkAsPaid, transactionType }) => {
    const { trigger, getValues, setError } = useFormContext();

    const handleNext = async (step: number) => {
        const data = getValues();

        if (step === 1) {
            try {
                await validationSchemaStep1.validate(data, { abortEarly: false });
            } catch (error) {
                errorCatcher(error, setError);
                return;
            }
        }

        if (await trigger()) setStep(step);
    };

    switch (step) {
        case 0:
            return <Step1 onNext={() => handleNext(1)} />;
        case 1:
            return <Step2 onPrev={() => setStep(0)} transactionType={transactionType} />;
        case 2:
            return <Step3 onSetMarkAsPaid={onSetMarkAsPaid} onPrev={() => setStep(0)} />;
        case 3:
            return <Step4 onClose={onClose} />;
        default:
            return 'Unknown step';
    }
};

export default Step;
