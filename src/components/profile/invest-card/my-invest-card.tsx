import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import InvestStats from 'components/profile/invest-stats';

import Image from './image';
import Investing from './investing';
import Description from './description';
import type { IMyBrief } from 'types/brief';

const Item = styled(Stack)<{ opacity: string }>`
    background: #f6f7f8;
    border-radius: 15px;
    height: 100%;
    flex: 1;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    opacity: ${({ opacity }) => opacity};

    &:hover {
        transform: scale(1.05);
    }

    @media (min-width: 1668px) {
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
    font-size: 1.25rem;
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
    const { t } = useTranslation('personal');

    if (!card || !card.briefcaseAccountCommonView) return null;

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
            briefcaseImage,
            briefcaseStatus,
        },
        briefcaseAccountCommonInvestView: { count, sum },
    } = card;

    return (
        <Item opacity={companyType === 'Company' && briefcaseStatus === 'Loan payed' ? '0.6' : '1'}>
            <Image image={briefcaseImage} />
            <Stack
                sx={{
                    padding: { lg: '60px 30px 30px', xl: '60px 20px 20px', xs: '15px' },
                    position: 'relative',
                    flex: '1',
                }}
            >
                <Investing
                    logo={logo}
                    isHot={false}
                    amountFinish={amountFinish}
                    hidePercent={companyType === 'Franchise'}
                    accountCount={accountCount}
                    amount={amount}
                />
                <Description name={companyName} status={true} text={descriptions} />
                <Stack spacing="15px" sx={{ marginBottom: 'auto' }}>
                    <Label>{t('Ваши инвестиции')}</Label>
                    <InvestStats companyType={companyType} countTransaction={count} myTotal={sum} />
                    <Divider />
                    <Label>{t('Условия кредитования')}</Label>
                    <InvestStats
                        amountFinish={amountFinish}
                        finishDay={briefcaseStatus !== 'In progress' ? undefined : finishDay}
                        companyType={companyType}
                        percents={percents}
                    />
                </Stack>
                <Link to={`/showcases/${briefcaseId}?companyId=${companyInvestId}`}>
                    <Button variant="green" fullWidth>
                        {t('Подробнее')}
                    </Button>
                </Link>
            </Stack>
        </Item>
    );
};

export default MyInvestCard;
