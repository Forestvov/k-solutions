import { useState } from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Form } from './form';
import StatusPopup from './status-popup';
import type { IHistory } from 'types/transaction';
import type { PropsWitchChildren } from '../../../../../global';

const DialogStyled = styled(Dialog)`
    .css-kmnvkl-MuiPaper-root-MuiDialog-paper {
        max-width: 100%;
        border-radius: 18px;
        box-shadow: none;
        background: transparent;
        margin: 20px;
        ::-webkit-scrollbar {
            width: 0px;
            opacity: 0;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }
`;

interface IProps {
    content?: IHistory;
    transactionType?: 'In' | 'Out';
}

const Replenish = ({ children, content, transactionType }: PropsWitchChildren<IProps>) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                onClick={handleClickOpen}
                sx={{
                    width: {
                        md: 'auto',
                        xs: '100%',
                    },
                    background: content ? 'transparent !important' : '#373737',
                    padding: content ? '5px' : '16px 55px 15px',
                }}
            >
                {children}
            </Button>
            <DialogStyled open={open} onClose={handleClose}>
                {content?.transactionStatus === 'Canceled' || content?.transactionStatus === 'Success' ? (
                    <StatusPopup onClose={handleClose} content={content} />
                ) : (
                    <Form content={content} transactionType={transactionType} onClose={handleClose} />
                )}
            </DialogStyled>
        </>
    );
};

export default Replenish;
