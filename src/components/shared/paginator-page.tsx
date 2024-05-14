// @ts-nocheck
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

const ButtonMore = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 500;

    &:hover {
        color: #006838;
        svg {
            transform: rotate(90deg);
        }
    }

    svg {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        margin-left: 10px;
        transform: rotate(270deg);
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
    isFirst?: boolean;
    isLast: boolean;
    currentPage?: number;
    countPages?: number;
    onChange?: (page: number) => void;
    currentSize?: number;
    onChangeSize?: (page: number) => void;
    showMore?: boolean;
}

const PaginatorPage = ({
    countPages = 2,
    currentPage,
    isFirst,
    isLast,
    onChange,
    showMore = false,
    currentSize,
    onChangeSize,
}: Props) => {
    const { t } = useTranslation('personal');

    if (countPages < 2) return null;

    if (showMore && currentSize && onChangeSize) {
        const onChangeSizeHandler = () => {
            onChangeSize(currentSize + currentSize);
        };

        if (isLast) return null;

        return (
            <ButtonMore onClick={onChangeSizeHandler}>
                Показать еще <RightArrowIcon />
            </ButtonMore>
        );
    }

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
