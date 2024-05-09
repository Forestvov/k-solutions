import { useFormContext } from 'react-hook-form';
import type { FormState } from '../types';
import P2PStep2 from './p2p-step2';
import BankCardForm from './bank-card-form';

interface Props {
    onSetMarkAsPaid: VoidFunction;
}

const Step3 = ({ onSetMarkAsPaid }: Props) => {
    const { getValues } = useFormContext<FormState>();

    switch (getValues().transactionLinkType) {
        case 'p2p':
            return <P2PStep2 onSetMarkAsPaid={onSetMarkAsPaid} />;
        case 'Visa':
            return <BankCardForm />;
        default:
            return 'Unknown method';
    }
};

export default Step3;
