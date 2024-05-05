import Button from '@mui/material/Button';

interface Props {
    onNext?: VoidFunction;
}

const DefaultForm = ({ onNext }: Props) => {
    return (
        <Button onClick={onNext} variant="dark-green">
            Подтвердить
        </Button>
    );
};

export default DefaultForm;
