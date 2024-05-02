import Stack from '@mui/material/Stack';

import type { CompanyType } from 'types/company';

import KeyIcon from 'assets/pages/personal/key-info.svg?react';

import Title from '../../title';
import Wrapper from '../gray-wrapper';
import List from './list';

interface Props {
    companyType: CompanyType;
}

const KeyInformation = ({ companyType }: Props) => {
    return (
        <Wrapper>
            <Stack spacing={{ lg: '45px', xs: '30px' }}>
                <Stack spacing="15px" direction="row">
                    <KeyIcon />
                    <Title>Ключевая информация</Title>
                </Stack>
                <List companyType={companyType} />
            </Stack>
        </Wrapper>
    );
};

export default KeyInformation;
