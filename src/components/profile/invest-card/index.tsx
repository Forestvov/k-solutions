import { NavLink } from 'react-router-dom';
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
}

const InvestCard = ({ card }: Prop) => {
    const {
        descriptions,
        logo,
        companyName,
        amount,
        image,
        amountFinish,
        accountCount,
        finishDay,
        percents,
        isActive,
        briefcaseId,
        companyInvestId,
    } = card;

    if (!card) return null;

    return (
        <Item>
            <Image image={image} />
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
                    <InvestStats amountFinish={amountFinish} finishDay={finishDay} percents={percents} />
                </Box>
                <Link to={`/showcases/${briefcaseId}?companyId=${companyInvestId}`}>
                    <Button variant="green" fullWidth>
                        Подробнее
                    </Button>
                </Link>
            </Stack>
        </Item>
    );
};

export default InvestCard;
