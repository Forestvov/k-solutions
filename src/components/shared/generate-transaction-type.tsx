import { useTranslation } from 'react-i18next';

interface Prop {
    type: string;
}

export const GenerateTransactionType = ({ type }: Prop) => {
    const { t } = useTranslation('personal');

    switch (type) {
        case 'Token':
            return t('Криптовалюта');
        case 'Wallet':
            return t('Электронные кошельки');
        case 'Bank':
            return t('Банковский перевод');
        case 'p2p':
            return 'P2P';
        case 'Visa':
            return 'Visa/Mastercard';
        default:
            return '';
    }
};
