import type { FC } from 'react';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/system';

import { fCurrency, fPercent } from 'helpers/number-format';

import InvestStat from './invest-stat';
import { getRemainDays } from 'helpers/format-time';
import { declensionNum } from 'helpers/declension-num';

interface Prop {
    sx?: SxProps;
    finishDay: string;
    percents: number;
    amountFinish: number;
}

const InvestStats: FC<Prop> = ({ sx, percents, finishDay, amountFinish }) => {
    const countDay = getRemainDays(finishDay);

    return (
        <Stack spacing="10px" sx={sx}>
            <InvestStat title="Сумма займа:" value={fCurrency(amountFinish)} />
            <InvestStat
                title="До конца сбора:"
                value={`${countDay} ${declensionNum(countDay, ['день', 'дня', 'дней'])}`}
            />
            <InvestStat title="Ставка, % ежемясчный :" value={fPercent(percents)} />
        </Stack>
    );
};

export default InvestStats;
