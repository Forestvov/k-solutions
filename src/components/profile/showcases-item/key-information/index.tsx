import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';

import KeyIcon from 'assets/pages/personal/key-info.svg?react';

import Title from '../../title';
import Wrapper from '../gray-wrapper';
import List from './list';

interface Row {
    label: string;
    value: string | number;
}

interface Props {
    firstRow: Row[];
    secondRow: Row[];
}

const KeyInformation = ({ secondRow, firstRow }: Props) => {
    const { t } = useTranslation('personal');

    return (
        <Wrapper>
            <Stack spacing={{ lg: '45px', xs: '30px' }}>
                <Stack spacing="15px" direction="row">
                    <KeyIcon />
                    <Title>{t('Ключевая информация')}</Title>
                </Stack>
                <List firstRow={firstRow} secondRow={secondRow} />
            </Stack>
        </Wrapper>
    );
};

export default KeyInformation;
