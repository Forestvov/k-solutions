import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import { fCurrency } from 'helpers/number-format';

import UsdIcon from 'assets/pages/personal/currency/usd.png';
import EurIcon from 'assets/pages/personal/currency/eur.png';
import GbrIcon from 'assets/pages/personal/currency/gbr.png';
import JpyIcon from 'assets/pages/personal/currency/jpy.png';
import CnyIcon from 'assets/pages/personal/currency/cny.png';

import Title from '../../title';

import GrayWrapper from '../gray-wrapper';
import { getCurrency } from 'api/balance';
import { useEffect, useState } from 'react';

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
    const { t } = useTranslation('personal');

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
                <Type>{t('Курс')}</Type>
                <Label>{fCurrency(parseFloat(value.replace(',', '.')), 'ru-RU', 'RUB')}</Label>
            </Stack>
        </Stack>
    );
};

const Well = () => {
    const { t } = useTranslation('personal');

    const [list, setList] = useState({
        usd: 0,
        euro: 0,
        funt: 0,
        yup: 0,
        chine: 0,
    });

    useEffect(() => {
        getCurrency().then(({ data }) => {
            setList({
                usd: data.USDRUB,
                euro: data.EURRUB,
                funt: data.GBPRUB,
                yup: data.JPYRUB,
                chine: data.CNYRUB,
            });
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
                <TitleStyled>{t('Курс валют')}</TitleStyled>
                <Stack spacing="26px">
                    <Item label={t('Доллар США')} type="USD" value={String(list.usd)} image={UsdIcon} />
                    <Item label={t('Евро')} type="EUR" value={String(list.euro)} image={EurIcon} />
                    <Item label={t('Фунт Стерлингов')} type="GBP" value={String(list.funt)} image={GbrIcon} />
                    <Item label={t('Японская Иена')} type="JPY" value={String(list.yup)} image={JpyIcon} />
                    <Item label={t('Китайский Юань')} type="CNY" value={String(list.chine)} image={CnyIcon} />
                </Stack>
            </GrayWrapper>
        </Box>
    );
};

export default Well;
