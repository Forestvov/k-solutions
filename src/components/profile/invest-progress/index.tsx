import type { FC } from 'react';

import styled from '@emotion/styled';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/system';

import { fCurrency, fPercent } from 'helpers/number-format';
import { declensionNum } from 'helpers/declension-num';
import { useTranslation } from 'react-i18next';
import { useCurrencyContext } from 'context/currency';
import { renderCurrency } from 'helpers/renderCurrency';

const Value = styled.span`
    color: #373737;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.015em;

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
`;
const Label = styled.span`
    color: #616161;
    font-size: 0.8rem;
    letter-spacing: 0.015em;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

const InvestInfo = styled.span`
    color: #616161;
    font-size: 0.7rem;
    line-height: 17px;
    letter-spacing: 0.015em;

    @media (min-width: 768px) {
        font-size: 0.875rem;
    }
`;

const Progress = styled(LinearProgress)`
    border-radius: 13px;
    height: 6px;
    .MuiLinearProgress-bar1Buffer {
        border-radius: 13px;
        background: #006838;
    }
    .MuiLinearProgress-bar2Buffer {
        border-radius: 13px;
        background: #d9d9d9;
    }
`;

interface Prop {
    sx?: SxProps;
    close?: boolean;
    stoped?: boolean;
    amountFinish: number;
    amount: number;
    accountCount: number;
}

const InvestProgress: FC<Prop> = ({ sx, stoped = false, close, amount, amountFinish, accountCount }) => {
    const { t } = useTranslation('personal');
    const { selected, currency } = useCurrencyContext();

    if (close) {
        return (
            <Box sx={{ width: '100%', ...sx }}>
                <Value>{t('Инвестиции')}</Value>
            </Box>
        );
    }

    const percent = (amount / amountFinish) * 100;

    return (
        <Box sx={{ width: '100%', ...sx }}>
            <Stack marginBottom={!stoped ? '8px' : '12px'} alignItems="baseline" direction="row" spacing="12px">
                <Value>
                    {amount
                        ? fCurrency(
                              renderCurrency({
                                  usd: amount,
                                  rub: currency.USD,
                                  eur: currency.EUR,
                                  currency: selected,
                              })
                          )
                        : '$0'}
                </Value>
                <Label>{stoped ? t('Проинвестировано') : t('Собрано')}</Label>
            </Stack>
            {!stoped && <Progress valueBuffer={100} variant="buffer" value={amount > amountFinish ? 100 : percent} />}
            <Stack marginTop="6px" direction="row" justifyContent="space-between">
                <InvestInfo>
                    {accountCount} {declensionNum(accountCount, [t('инвестор'), t('инвестора'), t('инвесторов')])}
                </InvestInfo>
                {!stoped && (
                    <InvestInfo>
                        {fPercent(percent)} {t('от цели')}
                    </InvestInfo>
                )}
            </Stack>
        </Box>
    );
};

export default InvestProgress;
