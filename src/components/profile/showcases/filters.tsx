import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import IconHot from 'assets/pages/personal/hot-filter.svg?react';
import { useSettingsContext } from 'context/settings/hooks/useSettingsContext';
import { useTranslation } from 'react-i18next';

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

    const { settings } = useSettingsContext();

    const BUTTONS = [
        { label: t('Все'), value: '', type: '' },
        {
            label: t('Горячие предложения'),
            value: settings.briefcaseHot ?? '70',
            operation: '>',
            type: 'percentFinish',
        },
        { label: t('Франшизы'), value: 'Franchise', type: 'companyType' },
        { label: t('Идет сбор займа'), value: 'In progress', type: 'briefcaseStatus' },
        { label: t('Сбор завершен'), value: 'Collection completed', type: 'briefcaseStatus' },
        { label: t('Займ погашен'), value: 'Loan payed', type: 'briefcaseStatus' },
    ];

    return (
        <Stack direction="row" flexWrap="wrap" marginBottom={{ xs: '20px', md: '40px' }}>
            {BUTTONS.map((btn, idx) => (
                <ButtonStyled
                    key={idx}
                    active={current.value === btn.value}
                    onClick={() => {
                        setPage(0);
                        btn.operation
                            ? onChange({
                                  key: btn.type,
                                  value: btn.value,
                                  operation: btn.operation,
                              })
                            : onChange({
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
