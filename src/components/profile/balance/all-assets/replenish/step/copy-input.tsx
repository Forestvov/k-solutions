import type { ComponentType, FC, ReactElement } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Snackbar from '@mui/material/Snackbar';
import type { SlideProps } from '@mui/material/Slide';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

interface Prop {
    value: string;
    prefix?: string;
    label?: string;
}

const Block = styled.div`
    display: flex;
    align-items: center;
    height: 63px;
    border-radius: 10px;
    border: 1px solid #20836d;
    padding: 0 25px 0 20px;
    line-height: 63px;
    font-weight: 600;
    font-size: 16px;
    color: #373737;
    width: 100%;
    position: relative;

    @media (min-width: 768px) {
        line-height: 66px;
        height: 66px;
        padding: 0 25px 0 30px;
    }
`;

const Value = styled.div`
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    @media (min-width: 768px) {
        max-width: 456px;
    }
`;

const CopyButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    background: transparent;
    border: none;
    padding: 20px;
`;

const Prefix = styled.div`
    margin-left: 5px;
`;

const Label = styled.div`
    font-size: 16px;
    line-height: 19px;
    color: #696969;
    margin-bottom: 10px;
`;

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="left" />;
}

type TransitionType = ComponentType<TransitionProps & { children: ReactElement<any, any> }>;

const CopyInput: FC<Prop> = ({ value, prefix, label }) => {
    const { t } = useTranslation('personal');

    const [state, setState] = useState<{
        open: boolean;
        Transition: TransitionType;
    }>({
        open: false,
        Transition: Fade,
    });

    const handleClick = (Transition: TransitionType) => () => {
        navigator.clipboard.writeText(value);
        setState({
            open: true,
            Transition,
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        });
    };

    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            {label && <Label>{label}</Label>}
            <Block>
                <Value>{value}</Value>
                {prefix ? <Prefix>{prefix}</Prefix> : '...'}
                <CopyButton onClick={handleClick(SlideTransition)} type="button">
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.5859 20H3.125C1.40184 20 0 18.5982 0 16.875V6.28906C0 4.5659 1.40184 3.16406 3.125 3.16406H10.5859C12.3091 3.16406 13.7109 4.5659 13.7109 6.28906V16.875C13.7109 18.5982 12.3091 20 10.5859 20ZM3.125 4.72656C2.26348 4.72656 1.5625 5.42754 1.5625 6.28906V16.875C1.5625 17.7365 2.26348 18.4375 3.125 18.4375H10.5859C11.4475 18.4375 12.1484 17.7365 12.1484 16.875V6.28906C12.1484 5.42754 11.4475 4.72656 10.5859 4.72656H3.125ZM16.8359 14.9219V3.125C16.8359 1.40184 15.4341 0 13.7109 0H5.03906C4.60754 0 4.25781 0.349727 4.25781 0.78125C4.25781 1.21277 4.60754 1.5625 5.03906 1.5625H13.7109C14.5725 1.5625 15.2734 2.26348 15.2734 3.125V14.9219C15.2734 15.3534 15.6232 15.7031 16.0547 15.7031C16.4862 15.7031 16.8359 15.3534 16.8359 14.9219Z"
                            fill="#838383"
                        />
                    </svg>
                </CopyButton>
                <Snackbar
                    open={state.open}
                    onClose={handleClose}
                    TransitionComponent={state.Transition}
                    message={t('Добавлено в буфер обмена')}
                    key={state.Transition.name}
                    autoHideDuration={3000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                />
            </Block>
        </Box>
    );
};

export default CopyInput;
