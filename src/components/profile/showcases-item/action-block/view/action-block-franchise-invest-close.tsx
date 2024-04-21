import InvestStats from '../../../invest-stats';
import InvestProgress from '../../../invest-progress';
import Wrapper from '../../gray-wrapper';
import InvestCloseDialog from '../invest-close-dialog';

const ActionBlockFranchiseInvestClose = () => {
    return (
        <Wrapper>
            <InvestProgress close sx={{ marginBottom: '15px' }} />
            <InvestStats sx={{ marginBottom: '34px' }} />
            <InvestCloseDialog />
        </Wrapper>
    );
};

export default ActionBlockFranchiseInvestClose;
