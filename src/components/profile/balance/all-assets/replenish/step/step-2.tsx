import { useFormContext } from 'react-hook-form';
import type { FormState } from '../types';
import CurrencyForm from './currency-form';
import P2PStep2 from './p2p-step2';
import BankCardForm from './bank-card-form';

interface Props {
    onNext?: VoidFunction;
    onPrev?: VoidFunction;
}

const Step2 = ({ onNext, onPrev }: Props) => {
    const { getValues } = useFormContext<FormState>();

    switch (getValues().method) {
        case 'Tether TRC 20':
            return <CurrencyForm />;
        case 'p2p':
            return <P2PStep2 onNext={onNext} />;
        case 'Visa/Mastercard':
            return <BankCardForm onNext={onNext} onPrev={onPrev} />;
        default:
            return 'Unknown method';
    }
};

export default Step2;
