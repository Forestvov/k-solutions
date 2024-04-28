import { useFormContext } from 'react-hook-form';
import type { FormState } from 'components/profile/balance/all-assets/replenish/types';
import Vaiting from 'components/profile/balance/all-assets/replenish/step/vaiting';

interface Props {
    onClose: VoidFunction;
}

const Step3 = ({ onClose }: Props) => {
    const { getValues } = useFormContext<FormState>();

    switch (getValues().method) {
        case 'p2p':
            return <Vaiting onClose={onClose} />;
        case 'Visa/Mastercard':
            return <Vaiting onClose={onClose} />;
        default:
            return 'Unknown method';
    }
};

export default Step3;
