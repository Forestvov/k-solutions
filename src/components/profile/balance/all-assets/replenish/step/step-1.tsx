import type { FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useFormContext } from 'react-hook-form';

import Selector from '../selector';
import listMethodPay from '../list-method-pay';
import type { FormState } from '../types';

import TitleStep from './title-step';
import P2PForm from './p2p-form';
import DefaultForm from './default-form';

interface Props {
    onNext?: VoidFunction;
}

const Step1: FC<Props> = ({ onNext }) => {
    const { watch } = useFormContext<FormState>();

    const values = watch();

    return (
        <Box>
            <TitleStep>Выберите Платежную Систему</TitleStep>
            <Box
                sx={{
                    width: {
                        sm: '450px',
                        xs: '100%',
                    },
                    margin: '30px auto 0',
                }}
            >
                <Stack spacing="30px">
                    <Selector name="method" items={listMethodPay} />
                    {values.method === 'p2p' ? <P2PForm onNext={onNext} /> : <DefaultForm onNext={onNext} />}
                </Stack>
            </Box>
        </Box>
    );
};

export default Step1;
