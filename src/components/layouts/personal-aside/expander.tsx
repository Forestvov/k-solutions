import type { FC } from 'react';
import type { FunctionVoid } from 'global';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import ExpanderIcon from 'assets/pages/personal/navigation/expander.svg?react';

const Wrapper = styled(Stack)`
    margin-top: auto;
    padding-bottom: 54px;
    border-bottom: 1px solid #d0d5dd;
    margin-bottom: 58px;
    width: 100%;
`;

const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;

const Expander: FC<FunctionVoid> = ({ onClick }) => {
    return (
        <Wrapper>
            <Button onClick={onClick}>
                <ExpanderIcon />
            </Button>
        </Wrapper>
    );
};

export default Expander;
