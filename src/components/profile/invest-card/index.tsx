import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import InvestStats from 'components/profile/invest-stats';
import type { IBrief } from 'types/brief';

import Image from './image';
import Investing from './investing';
import Description from './description';
import Tag from 'components/profile/invest-card/tag';

const Item = styled(Stack)`
    position: relative;
    background: #f6f7f8;
    border-radius: 15px;
    height: 100%;
    flex: 1;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

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

interface Prop {
    card: IBrief;
    hideStats?: boolean;
    isHot: boolean;
}

const InvestCard = ({ card, hideStats, isHot }: Prop) => {
    const { t } = useTranslation('personal');
    const { userId } = useParams();

    if (!card) return null;

    const {
        descriptions,
        logo,
        companyName,
        amount,
        amountFinish,
        accountCount,
        finishDay,
        percents,
        isActive,
        briefcaseId,
        companyInvestId,
        companyType,
        briefcaseImage,
        amountMin,
        briefcaseStatus,
    } = card;

    return (
        <Item>
            <Image image={briefcaseImage} />
            <Tag status={companyType === 'Franchise' ? 'Franchise' : briefcaseStatus} />
            <Stack
                sx={{
                    padding: { lg: '60px 30px 30px', xl: '60px 20px 20px', xs: '15px' },
                    position: 'relative',
                    flex: '1',
                }}
            >
                <Investing
                    logo={logo}
                    amountFinish={amountFinish}
                    accountCount={accountCount}
                    hidePercent={companyType === 'Franchise'}
                    amount={amount}
                    isHot={isHot}
                />
                <Description name={companyName} status={isActive} text={descriptions} />
                <Box sx={{ marginBottom: 'auto' }}>
                    {!hideStats &&
                        (companyType === 'Company' ? (
                            <InvestStats
                                amountFinish={amountFinish}
                                finishDay={briefcaseStatus !== 'In progress' ? undefined : finishDay}
                                companyType={companyType}
                                percents={percents}
                            />
                        ) : (
                            <InvestStats
                                amountMin={amountMin}
                                ranges={9999}
                                percents={percents}
                                companyType={companyType}
                            />
                        ))}
                </Box>
                {userId ? (
                    <Link to={`/${userId}/showcases/${briefcaseId}?companyId=${companyInvestId}`}>
                        <Button variant="green" fullWidth>
                            {t('Подробнее')}
                        </Button>
                    </Link>
                ) : (
                    <Link to={`/showcases/${briefcaseId}?companyId=${companyInvestId}`}>
                        <Button variant="green" fullWidth>
                            {t('Подробнее')}
                        </Button>
                    </Link>
                )}
            </Stack>
        </Item>
    );
};

export default InvestCard;
