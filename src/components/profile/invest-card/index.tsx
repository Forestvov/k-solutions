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

interface Prop {
    card: IBrief;
    hideStats?: boolean;
}

const InvestCard = ({ card, hideStats }: Prop) => {
    const { t } = useTranslation('personal');
    const { id } = useParams();

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
    } = card;

    return (
        <Item>
            <Image image={briefcaseImage} />
            <Stack
                sx={{
                    padding: { xl: '60px 30px 30px', sm: '60px 20px 20px', xs: '15px' },
                    position: 'relative',
                    flex: '1',
                }}
            >
                <Investing logo={logo} amountFinish={amountFinish} accountCount={accountCount} amount={amount} />
                <Description name={companyName} status={isActive} text={descriptions} />
                <Box sx={{ marginBottom: 'auto' }}>
                    {!hideStats &&
                        (companyType === 'Company' ? (
                            <InvestStats
                                amountFinish={amountFinish}
                                finishDay={finishDay}
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
                {id ? (
                    <Link to={`/${id}/showcases/${briefcaseId}?companyId=${companyInvestId}`}>
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
