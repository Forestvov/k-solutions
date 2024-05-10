import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import IconHot from 'assets/pages/personal/hot-filter.svg?react';

const ButtonStyled = styled(Button)<{ active?: boolean }>`
    display: flex;
    align-items: center;
    color: #494949;
    background: rgba(32, 131, 109, 0.2);
    border-radius: 7px;
    padding: 10px 25px;
    margin-left: 0;
    margin-right: 20px;
    margin-bottom: 20px;

    @media (min-width: 1668px) {
        margin-right: 30px;
    }

    svg {
        margin-right: 6px;
    }

    &:hover {
        color: #fff;
        background: #20836d;
    }

    ${({ active }) =>
        active &&
        `
        pointer-events: none;
        color: #fff;
        background: #20836d;
    `}
`;

interface Props {
    current: Record<string, string>;
    onChange: (status: { key: string; operation?: string; value: string }) => void;
    setPage: (page: number) => void;
}

const Filters = ({ current, onChange, setPage }: Props) => {
    const { t } = useTranslation('personal');

    const BUTTONS = [
        { label: t('Все'), value: '', type: '' },
        { label: t('Франшизы'), value: 'Franchise', type: 'companyType' },
        { label: t('Компании'), value: 'Company', type: 'companyType' },
    ];

    return (
        <Stack direction="row" flexWrap="wrap" marginBottom="20px">
            {BUTTONS.map((btn, idx) => (
                <ButtonStyled
                    key={idx}
                    active={current.value === btn.value}
                    onClick={() => {
                        setPage(0);
                        onChange({
                            key: btn.type,
                            value: btn.value,
                        });
                    }}
                >
                    {btn.type === 'percentFinish' && <IconHot />}
                    {btn.label}
                </ButtonStyled>
            ))}
        </Stack>
    );
};

export default Filters;
