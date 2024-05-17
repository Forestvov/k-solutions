import Wrapper from '../../gray-wrapper';
import InvestCloseDialog from '../invest-close-dialog';
import type { CompanyType } from 'types/company';
import InvestProgress from 'components/profile/invest-progress';
import InvestStats from 'components/profile/invest-stats';

interface Props {
    companyType: CompanyType;
    myTotal: number;
    countTransaction: number;
}

const ActionBlockFranchiseInvestClose = ({ companyType, myTotal, countTransaction }: Props) => {
    return (
        <Wrapper>
            <InvestProgress
                hidePercent={companyType === 'Franchise'}
                amount={0}
                amountFinish={0}
                accountCount={0}
                close
                sx={{ marginBottom: '15px' }}
            />
            <InvestStats
                companyType={companyType}
                myTotal={myTotal}
                countTransaction={countTransaction}
                sx={{ marginBottom: '34px' }}
            />
            {companyType === 'Franchise' && (
                <InvestCloseDialog companyType={companyType} myTotal={myTotal} countTransaction={countTransaction} />
            )}
        </Wrapper>
    );
};

export default ActionBlockFranchiseInvestClose;
