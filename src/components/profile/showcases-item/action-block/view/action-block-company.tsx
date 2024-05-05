import InvestStats from 'components/profile/invest-stats';
import InvestProgress from 'components/profile/invest-progress';

import Wrapper from '../../gray-wrapper';
import Notification from '../notification';
import CompanyCreditForm from '../company-credit-form';
import type { CompanyType } from 'types/company';

interface Props {
    amountFinish: number;
    percents: number;
    finishDay: string;
    amountMin: number;
    ranges: number;
    amount: number;
    accountCount: number;
    updateBrief: VoidFunction;
    companyType: CompanyType;
}

const ActionBlockCompany = ({
    amountFinish,
    percents,
    finishDay,
    amountMin,
    ranges,
    amount,
    accountCount,
    updateBrief,
    companyType,
}: Props) => {
    return (
        <Wrapper>
            <InvestProgress
                amountFinish={amountFinish}
                amount={amount}
                accountCount={accountCount}
                sx={{ marginBottom: '30px' }}
            />
            <InvestStats
                finishDay={finishDay}
                amountFinish={amountFinish}
                percents={percents}
                amountMin={amountMin}
                ranges={ranges}
                companyType={companyType}
                sx={{ marginBottom: '20px' }}
            />
            <Notification sx={{ marginBottom: '110px' }} />
            <CompanyCreditForm updateBrief={updateBrief} />
        </Wrapper>
    );
};

export default ActionBlockCompany;
