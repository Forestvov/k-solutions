import type { FC } from 'react';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/system';

import InvestStat from './invest-stat';

interface Prop {
    sx?: SxProps;
}

const InvestStats: FC<Prop> = ({ sx }) => {
    return (
        <Stack spacing="10px" sx={sx}>
            <InvestStat />
            <InvestStat />
            <InvestStat tooltip="Срок займа - в случае с франшизами, вы можете в любое вермя после инвестирования подать запрос на закрытие кредитования, который будет рассмотрен в течении 5 дней." />
        </Stack>
    );
};

export default InvestStats;
