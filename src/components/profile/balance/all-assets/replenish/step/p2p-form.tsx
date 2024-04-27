import Button from '@mui/material/Button';
import Description from './description';
import Selector from '../selector';
import listBank from '../list-bank';
import Input from '../input';
import GetterInput from './getter-input';

interface Props {
    onNext?: VoidFunction;
}

const P2PForm = ({ onNext }: Props) => {
    return (
        <>
            <Selector name="bank" label="Отдаете" items={listBank} />
            <Input
                placeholder="0000 0000 0000 0000"
                mask="9999 9999 9999 9999"
                label="Имя владельца карты"
                name="numberCart"
            />
            <Input placeholder="Name Surname" label="Имя владельца карты" name="nameCart" />
            <Input placeholder="00.00" label="Сумма ₽" prefix="₽" name="price" />
            <GetterInput />
            <Input placeholder="00.00" label="Сумма $" prefix="$" name="priceTotal" />
            <div>
                <Button variant="dark-green" onClick={onNext} fullWidth>
                    Перейти к оплате
                </Button>
                <Description>
                    Выплата производится в автоматическом режиме по регламенту пользовательского соглашения.
                </Description>
            </div>
        </>
    );
};

export default P2PForm;
