import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';

import IconHot from 'assets/pages/personal/hot-filter.svg?react';
import { useSettingsContext } from 'context/settings/hooks/useSettingsContext';
import Scrollbar from 'components/shared/scrollbar';
import ButtonStyled from '../filter-button';

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
        <Scrollbar sx={{ marginBottom: '10px' }}>
            <Stack direction="row" spacing="20px" marginBottom={{ xs: '20px', lg: '40px' }}>
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
        </Scrollbar>
    );
};

export default Filters;
