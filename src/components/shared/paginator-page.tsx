import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import LeftArrowIcon from 'assets/arrows/arrow-pagination-page-left.svg?react';
import RightArrowIcon from 'assets/arrows/arrow-pagination-page-right.svg?react';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    padding: 12px;
    cursor: pointer;
    color: #667085;

    &:hover {
        color: #20836d;
    }
`;

const Counter = styled.span`
    font-weight: 400;
    font-size: 0.875rem;
    color: #344054;
    line-height: 20px;

    span {
        font-weight: 500;
    }
`;

const PaginatorPage = () => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={{ xs: '20px', md: '60px' }}>
            <Button>
                <LeftArrowIcon />
            </Button>
            <Counter>
                Страница <span>1</span> из <span>10</span>
            </Counter>
            <Button>
                <RightArrowIcon />
            </Button>
        </Stack>
    );
};

export default PaginatorPage;
