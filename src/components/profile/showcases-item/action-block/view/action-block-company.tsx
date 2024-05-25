import type { CompanyType } from 'types/company';
import type { BriefcaseStatusType } from 'types/brief';

import InvestStats from 'components/profile/invest-stats';
import InvestProgress from 'components/profile/invest-progress';

import Wrapper from '../../gray-wrapper';
import Notification from '../notification';
import CompanyCreditForm from '../company-credit-form';

interface Props {
    amountFinish: number;
    percents: number;
    finishDay: string;
    briefcaseStatus: BriefcaseStatusType;
    amountMin: number;
    ranges: number;
    amount: number;
    isActive: boolean;
    accountCount: number;
    remainDaysForNextGain: number;
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
    briefcaseStatus,
    remainDaysForNextGain,
    isActive,
}: Props) => {
    return (
        <Wrapper>
            <InvestProgress
                hidePercent={false}
                amountFinish={amountFinish}
                amount={amount}
                accountCount={accountCount}
                sx={{ marginBottom: '30px' }}
            />

            <InvestStats
                finishDay={briefcaseStatus === 'In progress' ? finishDay : undefined}
                amountFinish={amountFinish}
                percents={percents}
                amountMin={amountMin}
                ranges={ranges}
                companyType={companyType}
                remainDaysForNextGain={
                    briefcaseStatus === 'Collection completed' && isActive && remainDaysForNextGain !== null
                        ? remainDaysForNextGain
                        : undefined
                }
                sx={{ marginBottom: '20px' }}
            />

            <Notification sx={{ marginBottom: '110px' }} />

            {briefcaseStatus === 'In progress' && <CompanyCreditForm updateBrief={updateBrief} amountMin={amountMin} />}
        </Wrapper>
    );
};

export default ActionBlockCompany;
