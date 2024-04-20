import type { FC } from 'react';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
    onPrev?: VoidFunction;
    onNext?: VoidFunction;
    lastStep?: boolean;
}

const ButtonStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    gap: 10px;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 39px;
    color: #000000;
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:last-child {
        margin-left: auto;
    }

    &:hover {
        opacity: 1;
    }

    @media (min-width: 1024px) {
        font-size: 2rem;
        gap: 23px;
    }
`;

const ButtonNavigation: FC<Props> = ({ onNext, onPrev, lastStep }) => {
    return (
        <Stack
            direction={{ xs: lastStep ? 'column' : 'row', md: 'row' }}
            alignItems={{ xs: lastStep ? '' : 'center', md: 'center' }}
            spacing={{ xs: lastStep ? '15px' : '0', md: '0' }}
            justifyContent="space-between"
            marginTop="119px"
        >
            {onPrev && (
                <ButtonStyled onClick={onPrev} type="button">
                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 1L1 9.5L9.5 18" stroke="black" strokeLinecap="round" />
                    </svg>
                    Назад
                </ButtonStyled>
            )}
            {onNext && (
                <ButtonStyled onClick={onNext} type="button">
                    Далее
                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1L9 9.5L0.5 18" stroke="black" strokeLinecap="round" />
                    </svg>
                </ButtonStyled>
            )}
            {lastStep && (
                <Button variant="dark-green" type="submit">
                    Подтвердить регистрацию
                </Button>
            )}
        </Stack>
    );
};

export default ButtonNavigation;
