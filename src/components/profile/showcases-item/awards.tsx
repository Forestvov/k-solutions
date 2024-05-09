import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import DollarIcon from 'assets/pages/personal/circle-dollar.svg?react';
import AwwardIcon from 'assets/pages/personal/pre-ipo.svg?react';

import Title from '../title';
import Wrapper from './gray-wrapper';

const Text = styled.p`
    margin: 0;
    font-size: 1rem;
    line-height: 25px;
    color: #4c4c4c;

    @media (min-width: 1280px) {
        font-size: 1.1rem;
    }

    @media (min-width: 1668px) {
        font-size: 1.25rem;
    }
`;

const Awards = () => {
    const { t } = useTranslation('personal');

    return (
        <Wrapper>
            <Stack
                direction={{
                    sm: 'row',
                }}
                justifyContent="space-between"
                alignItems={{
                    sm: 'center',
                }}
                spacing={{
                    lg: '110px',
                    sm: '40px',
                    xs: '20px',
                }}
            >
                <Stack
                    spacing={{
                        lg: '30px',
                        xs: '15px',
                    }}
                >
                    <Stack spacing="15px" direction="row">
                        <DollarIcon />
                        <Title>{t('Награды')}</Title>
                    </Stack>
                    <Text>
                        {t(
                            'Финансируй компании на раннем этапе, и развивайся вместе с ней, стань участником рынка на предварительном публичном размещении, и получи вознаграждение.'
                        )}
                    </Text>
                </Stack>
                <Box sx={{ flex: 1 }}>
                    <AwwardIcon />
                </Box>
            </Stack>
        </Wrapper>
    );
};

export default Awards;
