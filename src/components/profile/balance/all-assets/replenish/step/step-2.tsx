import { useFormContext } from 'react-hook-form';
import type { FormState } from '../types';
import Step2Token from './step-2-token';
import BankCardForm from 'components/profile/balance/all-assets/replenish/step/bank-card-form';

interface Props {
    onPrev?: VoidFunction;
    transactionType?: 'In' | 'Out';
}

const Step2 = ({ onPrev, transactionType }: Props) => {
    const { getValues } = useFormContext<FormState>();

    switch (getValues('transactionLinkType')) {
        case 'Token':
            return <Step2Token transactionType={transactionType} />;
        case 'Visa':
            return <BankCardForm onPrev={onPrev} />;
        default:
            return 'Unknown transaction type';
    }
};

export default Step2;
