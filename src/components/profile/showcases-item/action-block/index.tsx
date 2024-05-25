import type { CompanyType } from 'types/company';
import type { BriefcaseStatusType } from 'types/brief';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import ActionBlockCompany from './view/action-block-company';
import ActionBlockFranchise from './view/action-block-franchise';
import ActionBlockFranchiseInvestClose from './view/action-block-franchise-invest-close';

interface Props {
    amountFinish: number;
    percents: number;
    finishDay: string;
    briefcaseStatus: BriefcaseStatusType;
    companyType: CompanyType;
    amountMin: number;
    ranges: number;
    amount: number;
    accountCount: number;
    updateBrief: VoidFunction;
    isActive: boolean;
    myTotal: number;
    countTransaction: number;
    remainDaysForNextGain: number;
}

const ActionBlock = ({
    isActive,
    companyType,
    percents,
    finishDay,
    amountFinish,
    ranges,
    amountMin,
    amount,
    accountCount,
    updateBrief,
    myTotal,
    countTransaction,
    briefcaseStatus,
    remainDaysForNextGain,
}: Props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xl'));

    return (
        <>
            {matches && isActive && (
                <ActionBlockFranchiseInvestClose
                    myTotal={myTotal}
                    countTransaction={countTransaction}
                    companyType={companyType}
                />
            )}
            {companyType === 'Company' && (
                <ActionBlockCompany
                    companyType="Company"
                    amount={amount}
                    accountCount={accountCount}
                    amountFinish={amountFinish}
                    finishDay={finishDay}
                    percents={percents}
                    amountMin={amountMin}
                    ranges={ranges}
                    updateBrief={updateBrief}
                    briefcaseStatus={briefcaseStatus}
                    remainDaysForNextGain={remainDaysForNextGain}
                    isActive={isActive}
                />
            )}
            {companyType === 'Franchise' && (
                <ActionBlockFranchise
                    amount={amount}
                    hidePercent
                    accountCount={accountCount}
                    amountFinish={amountFinish}
                    percents={percents}
                    amountMin={amountMin}
                    updateBrief={updateBrief}
                />
            )}
        </>
    );
};

export default ActionBlock;
