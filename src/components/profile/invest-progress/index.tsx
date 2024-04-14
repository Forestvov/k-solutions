import styled from '@emotion/styled';

import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Value = styled.span`
    color: #373737;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.015em;

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
`;
const Label = styled.span`
    color: #616161;
    font-size: 0.8rem;
    letter-spacing: 0.015em;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

const InvestInfo = styled.span`
    color: #616161;
    font-size: 0.7rem;
    line-height: 17px;
    letter-spacing: 0.015em;

    @media (min-width: 768px) {
        font-size: 0.875rem;
    }
`;

const Progress = styled(LinearProgress)`
    border-radius: 13px;
    height: 6px;
    .MuiLinearProgress-bar1Buffer {
        border-radius: 13px;
        background: #006838;
    }
    .MuiLinearProgress-bar2Buffer {
        border-radius: 13px;
        background: #d9d9d9;
    }
`;

const InvestProgress = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack marginBottom="8px" alignItems="baseline" direction="row" spacing="12px">
                <Value>$367,612.00</Value>
                <Label>Собрано</Label>
            </Stack>
            <Progress valueBuffer={100} variant="buffer" value={100} />
            <Stack marginTop="6px" direction="row" justifyContent="space-between">
                <InvestInfo>142 инвестора</InvestInfo>
                <InvestInfo>132% от цели</InvestInfo>
            </Stack>
        </Box>
    );
};

export default InvestProgress;
