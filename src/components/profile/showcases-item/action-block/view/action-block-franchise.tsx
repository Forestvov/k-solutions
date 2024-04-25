import Button from '@mui/material/Button';

import InvestStats from '../../../invest-stats';
import InvestProgress from '../../../invest-progress';
import Wrapper from '../../gray-wrapper';

import LastInvest from '../last-invest';

const ActionBlockFranchise = () => {
    return (
        <Wrapper>
            <InvestProgress stoped sx={{ marginBottom: '30px' }} />
            <InvestStats sx={{ marginBottom: '110px' }} />
            <Button variant="dark-green" fullWidth sx={{ marginBottom: '20px' }}>
                Кредитовать
            </Button>
            <LastInvest />
        </Wrapper>
    );
};

export default ActionBlockFranchise;