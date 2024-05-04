import Button from '@mui/material/Button';
import Input from '../input';

interface Props {
    onNext?: VoidFunction;
}

const DefaultForm = ({ onNext }: Props) => {
    return (
        <>
            <Input placeholder="Укажите сумму пополнения" name="amount" prefix="$" />
            <Button onClick={onNext} variant="dark-green">
                Подтвердить
            </Button>
        </>
    );
};

export default DefaultForm;
