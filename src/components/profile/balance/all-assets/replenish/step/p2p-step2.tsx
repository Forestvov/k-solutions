import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import TitleStep from './title-step';
import Description from './description';
import Timer from './timer';
import CopyInput from './copy-input';

interface Props {
    onSetMarkAsPaid: VoidFunction;
}

const P2PStep2 = ({ onSetMarkAsPaid }: Props) => {
    const { t } = useTranslation('personal');

    const { getValues } = useFormContext();
    // Wait requisites когда админ не отправил
    // Process когда отправил
    // transactionId
    if (getValues('transactionStatus') === 'Process') {
        return (
            <div>
                <TitleStep>
                    {t('Выполните перевод на указанные реквизиты в установленный срок, иначе он будет аннулирован.')}
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
                            <CopyInput label={t('Номер Карты')} value={getValues('contact').split(':')[1]} />
                            <CopyInput label={t('Фамлия Имя Владельца')} value={getValues('contact').split(':')[0]} />
                            <Button
                                variant="dark-green"
                                fullWidth
                                type="button"
                                sx={{
                                    marginBottom: '5px',
                                }}
                                onClick={() => {
                                    onSetMarkAsPaid();
                                }}
                            >
                                {t('Подтвердить оплату')}
                            </Button>
                        </Stack>
                        <Description>{t('Все платежи проходят по системе AML.')}</Description>
                    </Box>
                    <Timer timestamp={getValues('transactionDate')} deadMin={60} setStatus={() => console.log()} />
                </Box>
            </div>
        );
    }

    return (
        <div>
            <TitleStep>{t('Ожидайте получение реквизитов')}</TitleStep>
            <Timer timestamp={getValues('transactionDate')} deadMin={60} setStatus={() => console.log()} />
            <Box
                sx={{
                    maxWidth: '456px',
                }}
            >
                <Description>
                    {t(
                        'Вам будут выданы реквизиты для выполнения перевода. Среднее время выдачи реквизитов составляет 60 минут.'
                    )}
                </Description>
            </Box>
        </div>
    );
};

export default P2PStep2;
