import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import InvestStats from 'components/profile/invest-stats';

import Image from './image';
import Investing from './investing';
import Description from './description';

const Item = styled.div`
    background: #f6f7f8;
    border-radius: 15px;
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

const InvestCard = () => {
    return (
        <Item>
            <Image />
            <Box
                sx={{
                    padding: { xl: '60px 30px 30px', sm: '60px 20px 20px', xs: '15px' },
                    position: 'relative',
                }}
            >
                <Investing />
                <Description />
                <InvestStats />
                <Link to="/">
                    <Button variant="green" fullWidth>
                        Подробнее
                    </Button>
                </Link>
            </Box>
        </Item>
    );
};

export default InvestCard;
