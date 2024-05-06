import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import UsdIcon from 'assets/pages/personal/currency/usd.png';
import EurIcon from 'assets/pages/personal/currency/eur.png';
import GbrIcon from 'assets/pages/personal/currency/gbr.png';
import JpyIcon from 'assets/pages/personal/currency/jpy.png';
import CnyIcon from 'assets/pages/personal/currency/cny.png';

import Title from '../../title';

import GrayWrapper from '../gray-wrapper';
import { getCurrency } from 'api/balance';
import { useEffect, useState } from 'react';
import { fCurrency } from 'helpers/number-format';

const TitleStyled = styled(Title)`
    margin: 0 0 37px;
`;

const Image = styled.img`
    width: 40px;
    height: 40px;
`;

const Label = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #373737;

    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
    }
`;

const Type = styled.div`
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #737373;

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 19px;
    }
`;

interface ItemProp {
    label: string;
    type: string;
    image: string;
    value: string;
}

const Item = ({ label, type, image, value }: ItemProp) => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack
                direction={{
                    sm: 'row',
                }}
                spacing={{
                    sm: '16px',
                    xs: '10px',
                }}
                alignItems={{
                    sm: 'center',
                }}
            >
                <Image src={image} alt="" />
                <Stack spacing="10px">
                    <Label>{label}</Label>
                    <Type>{type}</Type>
                </Stack>
            </Stack>
            <Stack
                spacing="10px"
                sx={{
                    width: '70px',
                    flex: '0 0 auto',
                }}
            >
                <Type>Курс</Type>
                <Label>{fCurrency(parseFloat(value.replace(',', '.')), 'ru-RU', 'RUB')}</Label>
            </Stack>
        </Stack>
    );
};

const Well = () => {
    const [list, setList] = useState({
        usd: 0,
        euro: 0,
        funt: 0,
        yup: 0,
        chine: 0,
    });

    // R01235 - сша
    // R01239 - евро
    // R01035 - фунты
    // R01820 - яп
    // R01375 - кит

    useEffect(() => {
        getCurrency('R01235').then((data) => {
            setList((prevState) => ({
                ...prevState,
                usd: data,
            }));
        });
        getCurrency('R01239').then((data) => {
            setList((prevState) => ({
                ...prevState,
                euro: data,
            }));
        });
        getCurrency('R01035').then((data) => {
            setList((prevState) => ({
                ...prevState,
                funt: data,
            }));
        });
        getCurrency('R01820').then((data) => {
            setList((prevState) => ({
                ...prevState,
                yup: data,
            }));
        });
        getCurrency('R01375').then((data) => {
            setList((prevState) => ({
                ...prevState,
                chine: data,
            }));
        });
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: { lg: '560px' },
            }}
        >
            <GrayWrapper>
                <TitleStyled>Курс валют</TitleStyled>
                <Stack spacing="26px">
                    <Item label="Доллар США" type="USD" value={String(list.usd)} image={UsdIcon} />
                    <Item label="Евро" type="EUR" value={String(list.euro)} image={EurIcon} />
                    <Item label="Фунт Стерлингов" type="GBP" value={String(list.funt)} image={GbrIcon} />
                    <Item label="Японская Иена" type="JPY" value={String(list.yup)} image={JpyIcon} />
                    <Item label="Китайский Юань" type="CNY" value={String(list.chine)} image={CnyIcon} />
                </Stack>
            </GrayWrapper>
        </Box>
    );
};

export default Well;
