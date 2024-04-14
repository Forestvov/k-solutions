import Stack from '@mui/material/Stack';

import InvestStat from './invest-stat';

const InvestStats = () => {
    return (
        <Stack spacing="10px">
            <InvestStat />
            <InvestStat />
            <InvestStat />
        </Stack>
    );
};

export default InvestStats;
