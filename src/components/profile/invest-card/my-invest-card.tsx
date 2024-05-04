import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import InvestStats from 'components/profile/invest-stats';

import Image from './image';
import Investing from './investing';
import Description from './description';
import type { IMyBrief } from 'types/brief';

const Item = styled(Stack)`
    background: #f6f7f8;
    border-radius: 15px;
    height: 100%;
    flex: 1;

    @media (min-width: 768px) {
        border-radius: 35px;
    }
`;

const Link = styled(NavLink).bind(Button)`
    display: inline-block;
    width: 100%;
    margin-top: 30px;
`;

const Label = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.015em;
    color: #373737;
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    opacity: 0.25;
    background: #000;
`;

interface Props {
    card: IMyBrief;
}

const MyInvestCard = ({ card }: Props) => {
    if (!card) return null;

    const {
        briefcaseAccountCommonView: {
            descriptions,
            companyName,
            amount,
            amountFinish,
            accountCount,
            finishDay,
            percents,
            briefcaseId,
            companyInvestId,
            companyType,
            logo,
        },
        briefcaseAccountCommonInvestView: { count, sum },
    } = card;

    return (
        <Item>
            <Image image="image" />
            <Stack
                sx={{
                    padding: { xl: '60px 30px 30px', sm: '60px 20px 20px', xs: '15px' },
                    position: 'relative',
                    flex: '1',
                }}
            >
                <Investing logo={logo} amountFinish={amountFinish} accountCount={accountCount} amount={amount} />
                <Description name={companyName} status={true} text={descriptions} />
                <Stack spacing="15px" sx={{ marginBottom: 'auto' }}>
                    <Label>Ваши инвестиции</Label>
                    <InvestStats companyType={companyType} countTransaction={count} myTotal={sum} />
                    <Divider />
                    <Label>Условия кредитования</Label>
                    <InvestStats
                        amountFinish={amountFinish}
                        finishDay={finishDay}
                        companyType={companyType}
                        percents={percents}
                    />
                </Stack>
                <Link to={`/showcases/${briefcaseId}?companyId=${companyInvestId}`}>
                    <Button variant="green" fullWidth>
                        Подробнее
                    </Button>
                </Link>
            </Stack>
        </Item>
    );
};

export default MyInvestCard;
