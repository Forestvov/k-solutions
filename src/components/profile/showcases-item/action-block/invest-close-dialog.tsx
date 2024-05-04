import { useState } from 'react';
import styled from '@emotion/styled';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

import Title from '../../title';
import Wrapper from '../gray-wrapper';
import InvestForm from './invest-form';
import InvestStats from 'components/profile/invest-stats';
import type { CompanyType } from 'types/company';

const Content = styled.div`
    padding: 15px;

    @media (min-width: 768px) {
        width: 650px;
        padding: 39px 0;
    }
`;

const Box = styled.div`
    max-width: 450px;
    margin: 0 auto;
`;

const TitleContent = styled(Title)`
    margin: 0 0 40px;

    @media (min-width: 768px) {
        margin: 0 0 70px;
    }
`;

const Label = styled.div`
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 24px;
    letter-spacing: 0.015em;
    color: #373737;
    margin-bottom: 10px;
`;

const Description = styled.div`
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 17px;
    letter-spacing: 0.015em;
    color: #868686;
`;

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

interface Props {
    myTotal: number;
    countTransaction: number;
    companyType: CompanyType;
}

const InvestCloseDialog = ({ myTotal, countTransaction, companyType }: Props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="dark-green" fullWidth onClick={handleClickOpen}>
                Подать запрос на закрытие
            </Button>
            <DialogStyled open={open} onClose={handleClose}>
                <Wrapper>
                    <Content>
                        <TitleContent>Запрос на закрытие кредитования</TitleContent>
                        <Box>
                            <Label>Инвестиции</Label>
                            <InvestStats
                                myTotal={myTotal}
                                countTransaction={countTransaction}
                                companyType={companyType}
                                sx={{
                                    marginBottom: '45px',
                                }}
                            />
                            <InvestForm companyType={companyType} closeInvest />
                            <Description>Ваш запрос будет рассмотрен в течении 5 дней.</Description>
                        </Box>
                    </Content>
                </Wrapper>
            </DialogStyled>
        </>
    );
};

export default InvestCloseDialog;
