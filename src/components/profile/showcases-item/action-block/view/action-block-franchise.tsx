import InvestProgress from 'components/profile/invest-progress';
import InvestStats from 'components/profile/invest-stats';

import Wrapper from '../../gray-wrapper';
import InvestForm from '../invest-form';

interface Props {
    amountFinish: number;
    percents: number;
    amountMin: number;
    amount: number;
    accountCount: number;
    updateBrief: VoidFunction;
    hidePercent: boolean;
}

const ActionBlockFranchise = ({
    percents,
    amountFinish,
    amount,
    accountCount,
    amountMin,
    updateBrief,
    hidePercent,
}: Props) => {
    return (
        <Wrapper>
            <InvestProgress
                stoped
                amountFinish={amountFinish}
                amount={amount}
                accountCount={accountCount}
                hidePercent={hidePercent}
                sx={{ marginBottom: '30px' }}
            />
            <InvestStats
                companyType="Franchise"
                percents={percents}
                amountMin={amountMin}
                ranges={9999}
                sx={{ marginBottom: '110px' }}
            />
            <InvestForm updateBrief={updateBrief} amountMin={amountMin} companyType="Franchise" />
        </Wrapper>
    );
};

export default ActionBlockFranchise;
