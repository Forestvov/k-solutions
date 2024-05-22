import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';

import Scrollbar from 'components/shared/scrollbar';

import IconHot from 'assets/pages/personal/hot-filter.svg?react';
import ButtonStyled from '../filter-button';

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
        <Scrollbar sx={{ marginBottom: '10px' }}>
            <Stack direction="row" spacing="20px" marginBottom="20px">
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
        </Scrollbar>
    );
};

export default Filters;
