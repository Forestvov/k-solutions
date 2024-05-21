import { useFormContext } from 'react-hook-form';
import type { FormState } from '../types';
import Step2Token from './step-2-token';
import BankCardForm from './bank-card-form';
import P2PForm from './p2p-form';

interface Props {
    transactionType?: 'In' | 'Out';
}

const Step2 = ({ transactionType }: Props) => {
    const { getValues } = useFormContext<FormState>();

    switch (getValues('transactionLinkType')) {
        case 'p2p':
            return <P2PForm transactionType={transactionType} />;
        case 'Visa':
            return <BankCardForm transactionType={transactionType} />;
        default:
            return <Step2Token transactionType={transactionType} />;
    }
};

export default Step2;
