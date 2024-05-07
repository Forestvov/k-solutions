import { useFormContext } from 'react-hook-form';
import type { FormState } from 'components/profile/balance/all-assets/replenish/types';
import Vaiting from 'components/profile/balance/all-assets/replenish/step/vaiting';
import CurrencyForm from 'components/profile/balance/all-assets/replenish/step/currency-form';

interface Props {
    onClose: VoidFunction;
    transactionType?: 'In' | 'Out';
}

const Step4 = ({ onClose, transactionType }: Props) => {
    const { getValues } = useFormContext<FormState>();

    switch (getValues().transactionLinkType) {
        case 'Token':
            return transactionType === 'Out' ? (
                <Vaiting transactionType={transactionType} onClose={onClose} />
            ) : (
                <CurrencyForm />
            );
        case 'p2p':
            return <Vaiting transactionType={transactionType} onClose={onClose} />;
        case 'Visa':
            return <Vaiting transactionType={transactionType} onClose={onClose} />;
        default:
            return 'Unknown method';
    }
};

export default Step4;
