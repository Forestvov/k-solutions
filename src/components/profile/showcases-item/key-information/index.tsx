import Stack from '@mui/material/Stack';

import KeyIcon from 'assets/pages/personal/key-info.svg?react';

import Title from '../../title';
import Wrapper from '../gray-wrapper';
import List from './list';

const KeyInformation = () => {
    return (
        <Wrapper>
            <Stack spacing={{ lg: '45px', xs: '30px' }}>
                <Stack spacing="15px" direction="row">
                    <KeyIcon />
                    <Title>Ключевая информация</Title>
                </Stack>
                <List />
            </Stack>
        </Wrapper>
    );
};

export default KeyInformation;
