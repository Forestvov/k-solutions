import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import ActionBlockCompany from './view/action-block-company';
import ActionBlockFranchise from './view/action-block-franchise';
// import ActionBlockFranchiseInvest from './view/action-block-franchise-invest';
import ActionBlockFranchiseInvestClose from './view/action-block-franchise-invest-close';
import type { CompanyType } from 'types/company';

interface Props {
    amountFinish: number;
    percents: number;
    finishDay: string;
    companyType: CompanyType;
    amountMin: number;
    ranges: number;
    amount: number;
    accountCount: number;
    updateBrief: VoidFunction;
    isActive: boolean;
    myTotal: number;
    countTransaction: number;
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
                />
            )}
            {companyType === 'Franchise' && (
                <ActionBlockFranchise
                    amount={amount}
                    accountCount={accountCount}
                    amountFinish={amountFinish}
                    percents={percents}
                    amountMin={amountMin}
                    updateBrief={updateBrief}
                />
            )}
            {/* <ActionBlockFranchiseInvest /> */}
        </>
    );
};

export default ActionBlock;
