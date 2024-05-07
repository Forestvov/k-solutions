import { useFormContext } from 'react-hook-form';
import type { FormState } from '../types';
import P2PStep2 from './p2p-step2';
import BankCardForm from './bank-card-form';

interface Props {
    onPrev?: VoidFunction;
    onSetMarkAsPaid: VoidFunction;
}

const Step3 = ({ onPrev, onSetMarkAsPaid }: Props) => {
    const { getValues } = useFormContext<FormState>();

    switch (getValues().transactionLinkType) {
        case 'p2p':
            return <P2PStep2 onSetMarkAsPaid={onSetMarkAsPaid} />;
        case 'Visa':
            return <BankCardForm onPrev={onPrev} />;
        default:
            return 'Unknown method';
    }
};

export default Step3;
