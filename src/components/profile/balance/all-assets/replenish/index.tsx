import { useState } from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Form } from './form';
import StatusPopup from './status-popup';

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

const status = false;

const Replenish = () => {
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
                    width: { md: 'auto', xs: '100%' },
                    background: '#373737',
                    padding: '16px 55px 15px',
                }}
            >
                Пополнить
            </Button>
            <DialogStyled open={open} onClose={handleClose}>
                {status ? <StatusPopup onClose={handleClose} /> : <Form onClose={handleClose} />}
            </DialogStyled>
        </>
    );
};

export default Replenish;
