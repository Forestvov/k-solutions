import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

interface Props {
    onNext?: VoidFunction;
}

const DefaultForm = ({ onNext }: Props) => {
    const { t } = useTranslation('personal');

    return (
        <Button onClick={onNext} variant="dark-green">
            {t('Подтвердить')}
        </Button>
    );
};

export default DefaultForm;
