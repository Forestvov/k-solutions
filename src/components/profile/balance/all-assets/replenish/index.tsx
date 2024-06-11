import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Form } from './form';
import StatusPopup from './status-popup';
import type { IHistory } from 'types/transaction';

const DialogStyled = styled(Dialog)`
    .MuiDialog-paperWidthSm {
        max-width: 100%;
        border-radius: 18px;
        box-shadow: none;
        background: transparent;
        margin: 20px;
        ::-webkit-scrollbar {
            width: 0;
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

const Replenish = ({ children, content, transactionType }: PropsWithChildren<IProps>) => {
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
                    padding: content
                        ? '5px'
                        : {
                              lg: '16px 55px 15px',
                              xl: '16px 30px 15px',
                              xs: '10px 20px',
                          },
                }}
            >
                {children}
            </Button>
            <DialogStyled open={open} onClose={handleClose}>
                {content?.transactionStatus === 'Canceled' ||
                content?.transactionStatus === 'Success' ||
                content?.transactionStatus === 'Support' ? (
                    <StatusPopup onClose={handleClose} transactionType={transactionType} content={content} />
                ) : (
                    <Form contentRow={content} transactionType={transactionType} onClose={handleClose} />
                )}
            </DialogStyled>
        </>
    );
};

export default Replenish;
