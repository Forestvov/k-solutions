import Button from '@mui/material/Button';
import Wrapper from '../../gray-wrapper';

import LastInvest from '../last-invest';
import Notification from '../notification';

const ActionBlockCompany = () => {
    return (
        <Wrapper>
            {/* <InvestProgress sx={{ marginBottom: '30px' }} /> */}
            {/* <InvestStats sx={{ marginBottom: '20px' }} /> */}
            <Notification sx={{ marginBottom: '110px' }} />
            <Button variant="dark-green" fullWidth sx={{ marginBottom: '20px' }}>
                Кредитовать
            </Button>
            <LastInvest />
        </Wrapper>
    );
};

export default ActionBlockCompany;
