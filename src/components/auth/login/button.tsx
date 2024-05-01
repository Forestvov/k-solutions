import type { FC } from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

import type { ButtonProp } from './types';

const ButtonStyle = styled(Button)<Pick<ButtonProp, 'variation'>>`
    flex: 1;
    line-height: 80px;
    padding: 0 10px;
    font-weight: 300;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
    border: 1px solid transparent;
    cursor: pointer;
    border-radius: 9px;

    &:disabled {
        opacity: 0.6;
    }

    ${({ variation }) =>
        variation === 'outline' &&
        `
         color: #006838;
         background: transparent;
         border-color: #006838;
         
         &:hover {
            color: #fff;
            border-color: #20836D;
            background: #20836D;
         }
    `};

    ${({ variation }) =>
        variation === 'fill' &&
        `
         color: #fff;
         background: #006838;
         
         &:hover {
            background: #20836D;
         }
    `};
`;

const ButtonForm: FC<ButtonProp> = ({ children, onClick, variation, type, disabled }) => {
    return (
        <ButtonStyle onClick={onClick} type={type} variation={variation} disabled={disabled}>
            {children}
        </ButtonStyle>
    );
};

export default ButtonForm;
