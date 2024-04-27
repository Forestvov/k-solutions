import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import TitleStep from './title-step';
import Description from './description';
import Timer from './timer';
import CopyInput from './copy-input';

const get = true;

interface Props {
    onNext?: VoidFunction;
}

const P2PStep2 = ({ onNext }: Props) => {
    if (get) {
        return (
            <div>
                <TitleStep>
                    Выполните перевод на указанные реквизиты в установленный срок, иначе он будет аннулирован.
                </TitleStep>

                <Box
                    sx={{
                        margin: '0 auto',
                        maxWidth: '660px',
                    }}
                >
                    <Box
                        sx={{
                            marginTop: '60px',
                            marginBottom: '8px',
                        }}
                    >
                        <Stack spacing="30px">
                            <CopyInput label="Номер Карты" value="0000 0000 0000 0000" />
                            <CopyInput label="Фамлия Имя Владельца" value="Name Surname" />
                            <Button
                                variant="dark-green"
                                fullWidth
                                sx={{
                                    marginBottom: '5px',
                                }}
                                onClick={onNext}
                            >
                                Подтвердить оплату
                            </Button>
                        </Stack>
                        <Description>Все платежи проходят по системе AML.</Description>
                    </Box>
                    <Timer timestamp="2024-04-27T13:50:20.695+00:00" deadMin={60} setStatus={() => console.log()} />
                </Box>
            </div>
        );
    }

    return (
        <div>
            <TitleStep>Ожидайте получение реквизитов</TitleStep>
            <Timer timestamp="2024-04-27T13:50:20.695+00:00" deadMin={60} setStatus={() => console.log()} />
            <Box
                sx={{
                    maxWidth: '456px',
                }}
            >
                <Description>
                    Вам будут выданы реквизиты для выполнения перевода. Среднее время выдачи реквизитов составляет 60
                    минут.
                </Description>
            </Box>
        </div>
    );
};

export default P2PStep2;
