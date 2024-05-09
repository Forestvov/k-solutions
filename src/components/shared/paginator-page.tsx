import { useTranslation } from 'react-i18next';

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

    &:disabled {
        opacity: 0.2;

        &:hover {
            color: #667085;
        }
    }

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

interface Props {
    isFirst: boolean;
    isLast: boolean;
    currentPage: number;
    countPages: number;
    onChange: (page: number) => void;
}

const PaginatorPage = ({ countPages, currentPage, isFirst, isLast, onChange }: Props) => {
    const { t } = useTranslation('personal');

    if (countPages < 2) return null;

    return (
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={{ xs: '20px', md: '60px' }}>
            <Button disabled={isFirst} onClick={() => onChange(currentPage - 1)}>
                <LeftArrowIcon />
            </Button>
            <Counter>
                {t('Страница')} <span>{currentPage + 1}</span> {t('из')} <span>{countPages}</span>
            </Counter>
            <Button disabled={isLast} onClick={() => onChange(currentPage + 1)}>
                <RightArrowIcon />
            </Button>
        </Stack>
    );
};

export default PaginatorPage;
