import type { FC } from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

import type { ButtonProp } from './types';

const ButtonStyle = styled(Button)<Pick<ButtonProp, 'variation'>>`
    flex: 1;
    line-height: 50px;
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

    @media (min-width: 1024px) {
        line-height: 80px;
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
         
          @media (max-width: 1023px) {
             order: -1;
             margin: 0 0 20px 0 !important;
          }
         
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
