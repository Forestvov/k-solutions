import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import Stack from '@mui/material/Stack';

import ButtonNavigation from '../button-navigation';
import type { FormState } from '../types';

import Step3Company from './step-3-company';
import Step3Investor from './step-3-investor';
import styled from '@emotion/styled';

interface Props {
    onPrev?: VoidFunction;
    isAllReady: boolean;
}

const Error = styled.div`
    text-align: center;
    padding: 30px 0 0;
    color: #ff5630;
    font-size: 16px;
`;

const Step3: FC<Props> = ({ onPrev, isAllReady }) => {
    const { getValues } = useFormContext<FormState>();
    const accountType = getValues('accountType');

    return (
        <Stack>
            {accountType === 'Investor' && <Step3Investor />}
            {accountType === 'Company' && <Step3Company />}
            {isAllReady && <Error>Почта или логин уже заняты</Error>}
            <ButtonNavigation onPrev={onPrev} lastStep />
        </Stack>
    );
};

export default Step3;
