import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import IconHot from 'assets/pages/personal/hot-filter.svg?react';
import { useSettingsContext } from 'context/settings/hooks/useSettingsContext';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const ButtonStyled = styled(Button)<{ active?: boolean }>`
    display: flex;
    align-items: center;
    color: #494949;
    background: rgba(32, 131, 109, 0.2);
    border-radius: 7px;
    padding: 8px 20px;
    margin-left: 0;
    margin-right: 20px;
    margin-bottom: 20px;

    @media (min-width: 1668px) {
        margin-right: 30px;
        padding: 10px 25px;
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
    onChange: (status: Record<string, any>[]) => void;
}

const Filters = ({ onChange }: Props) => {
    const { t } = useTranslation('personal');

    const [current, setCurrent] = useState(0);

    const { settings } = useSettingsContext();

    const BUTTONS = [
        {
            label: t('Все'),
            query: [],
        },
        {
            label: t('Горячие предложения'),
            query: [
                {
                    value: settings.briefcaseHot ?? '70',
                    operation: '>',
                    key: 'percentFinish',
                },
                {
                    value: 'In progress',
                    key: 'briefcaseStatus',
                },
                { value: 'Company', key: 'companyType' },
            ],
        },
        {
            label: t('Франшизы'),
            query: [
                {
                    value: 'Franchise',
                    key: 'companyType',
                },
            ],
        },
        {
            label: t('Идет сбор займа'),
            query: [
                { value: 'In progress', key: 'briefcaseStatus' },
                { value: 'Company', key: 'companyType' },
            ],
        },
        {
            label: t('Сбор завершен'),
            query: [
                { value: 'Collection completed', key: 'briefcaseStatus' },
                { value: 'Company', key: 'companyType' },
            ],
        },
        {
            label: t('Займ погашен'),
            query: [
                { value: 'Loan payed', key: 'briefcaseStatus' },
                { value: 'Company', key: 'companyType' },
            ],
        },
    ];

    return (
        <Stack direction="row" flexWrap="wrap" marginBottom={{ xs: '20px', lg: '40px' }}>
            {BUTTONS.map((btn, idx) => (
                <ButtonStyled
                    key={idx}
                    active={current === idx}
                    onClick={() => {
                        onChange(btn.query);
                        setCurrent(idx);
                    }}
                >
                    {btn.query[0]?.key === 'percentFinish' && <IconHot />}
                    {btn.label}
                </ButtonStyled>
            ))}
        </Stack>
    );
};

export default Filters;
