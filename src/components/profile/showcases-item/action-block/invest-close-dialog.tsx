import { useState } from 'react';
import styled from '@emotion/styled';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

import Title from '../../title';
import Wrapper from '../gray-wrapper';
import InvestFranchiseForm from './invest-franchise-form';

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

const InvestCloseDialog = () => {
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
            <Dialog open={open} onClose={handleClose}>
                <Wrapper>
                    <Content>
                        <TitleContent>Запрос на закрытие кредитования</TitleContent>
                        <Box>
                            <Label>Инвестиции</Label>
                            {/* <InvestStats */}
                            {/*     sx={{ */}
                            {/*         marginBottom: '45px', */}
                            {/*     }} */}
                            {/* /> */}
                            <InvestFranchiseForm />
                            <Description>Ваш запрос будет рассмотрен в течении 5 дней.</Description>
                        </Box>
                    </Content>
                </Wrapper>
            </Dialog>
        </>
    );
};

export default InvestCloseDialog;
