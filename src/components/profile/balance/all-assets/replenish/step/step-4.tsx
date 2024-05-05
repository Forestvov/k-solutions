import { useFormContext } from 'react-hook-form';
import type { FormState } from 'components/profile/balance/all-assets/replenish/types';
import Vaiting from 'components/profile/balance/all-assets/replenish/step/vaiting';
import CurrencyForm from 'components/profile/balance/all-assets/replenish/step/currency-form';

interface Props {
    onClose: VoidFunction;
}

const Step4 = ({ onClose }: Props) => {
    const { getValues } = useFormContext<FormState>();

    switch (getValues().transactionLinkType) {
        case 'Token':
            return <CurrencyForm />;
        case 'p2p':
            return <Vaiting onClose={onClose} />;
        case 'Visa':
            return <Vaiting onClose={onClose} />;
        default:
            return 'Unknown method';
    }
};

export default Step4;
