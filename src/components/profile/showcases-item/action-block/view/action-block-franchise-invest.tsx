import InvestStats from '../../../invest-stats';
import InvestProgress from '../../../invest-progress';
import Wrapper from '../../gray-wrapper';

import LastInvest from '../last-invest';
import InvestFranchiseForm from '../invest-franchise-form';

const ActionBlockFranchiseInvest = () => {
    return (
        <Wrapper>
            <InvestProgress stoped sx={{ marginBottom: '30px' }} />
            <InvestStats sx={{ marginBottom: '34px' }} />
            <InvestFranchiseForm />
            <LastInvest />
        </Wrapper>
    );
};

export default ActionBlockFranchiseInvest;
