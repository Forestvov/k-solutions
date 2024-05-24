import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/system';
import type { CompanyType } from 'types/company';

import { useCurrencyContext } from 'context/currency';

import { fCurrency } from 'helpers/number-format';
import { getRemainDays } from 'helpers/format-time';
import { declensionNum } from 'helpers/declension-num';

import InvestStat from './invest-stat';
import { renderCurrency } from 'helpers/renderCurrency';

interface Prop {
    sx?: SxProps;
    finishDay?: string;
    percents?: number;
    amountFinish?: number;
    amountMin?: number;
    ranges?: number;
    countTransaction?: number;
    myTotal?: number;
    remainDaysForNextGain?: number;
    companyType: CompanyType;
}

const InvestStats: FC<Prop> = ({
    sx,
    percents,
    finishDay,
    amountFinish,
    amountMin,
    ranges,
    myTotal,
    countTransaction,
    companyType,
    remainDaysForNextGain,
}) => {
    const countDay = getRemainDays(finishDay ? finishDay : '');
    const { selected, currency } = useCurrencyContext();
    const { t } = useTranslation('personal');

    return (
        <Stack spacing="10px" sx={sx}>
            {amountFinish && (
                <InvestStat
                    title={`${t('Сумма займа')}:`}
                    value={fCurrency(
                        renderCurrency({
                            usd: amountFinish,
                            rub: currency.USD,
                            eur: currency.EUR,
                            currency: selected,
                        })
                    )}
                />
            )}
            {finishDay && (
                <InvestStat
                    title={`${t('До конца сбора')}:`}
                    value={`${countDay} ${declensionNum(countDay, [t('день'), t('дня'), t('дней')])}`}
                />
            )}
            {remainDaysForNextGain && (
                <InvestStat
                    title={`${t('До выплаты')}:`}
                    value={`${remainDaysForNextGain} ${declensionNum(remainDaysForNextGain, [t('день'), t('дня'), t('дней')])}`}
                />
            )}
            {percents && (
                <InvestStat
                    title={
                        companyType === 'Company' ? `${t('Ставка, % ежемясчный')}:` : `${t('Ставка, % ежедневный')}:`
                    }
                    value={`${percents}%`}
                />
            )}
            {amountMin && (
                <InvestStat
                    title={`${t('Минимальная сумма')}:`}
                    value={fCurrency(
                        renderCurrency({
                            usd: amountMin,
                            rub: currency.USD,
                            eur: currency.EUR,
                            currency: selected,
                        })
                    )}
                />
            )}
            {ranges &&
                (ranges === 9999 ? (
                    <InvestStat
                        title={`${t('Срок займа')}:`}
                        tooltip={t('tooltip')}
                        value={
                            <svg
                                width="17"
                                height="9"
                                viewBox="0 0 17 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.49556 0.763494C4.98136 0.763494 5.42454 0.833806 5.82511 0.974431C6.22994 1.11506 6.59428 1.2983 6.91815 1.52415C7.24627 1.74574 7.53391 1.97585 7.78107 2.21449C7.91744 2.34233 8.04102 2.46804 8.15181 2.59162C8.26261 2.7152 8.36914 2.83878 8.47141 2.96236C8.56516 2.83878 8.66104 2.71946 8.75906 2.6044C8.86133 2.48508 8.98917 2.35511 9.14258 2.21449C9.51332 1.85227 9.97354 1.51989 10.5233 1.21733C11.0772 0.914772 11.7186 0.763494 12.4473 0.763494C13.1291 0.763494 13.7491 0.929687 14.3074 1.26207C14.8699 1.5902 15.3152 2.03125 15.6433 2.58523C15.9757 3.1392 16.1419 3.75284 16.1419 4.42614C16.1419 4.9375 16.046 5.4169 15.8542 5.86435C15.6625 6.30753 15.3983 6.69744 15.0616 7.03409C14.725 7.36648 14.3329 7.62855 13.8855 7.82031C13.438 8.00781 12.9586 8.10156 12.4473 8.10156C11.9615 8.10156 11.514 8.03338 11.1049 7.89702C10.7001 7.75639 10.3336 7.57741 10.0055 7.36009C9.68164 7.14276 9.39613 6.91903 9.14897 6.68892C9.00835 6.5483 8.88264 6.41619 8.77184 6.29261C8.66531 6.16477 8.56516 6.03906 8.47141 5.91548C8.36488 6.03906 8.25621 6.16477 8.14542 6.29261C8.03462 6.42045 7.91104 6.55256 7.77468 6.68892C7.53178 6.91903 7.24627 7.14276 6.91815 7.36009C6.59428 7.57315 6.22994 7.75 5.82511 7.89062C5.42454 8.03125 4.98136 8.10156 4.49556 8.10156C3.80522 8.10156 3.18093 7.9375 2.62269 7.60938C2.06445 7.28125 1.61914 6.8402 1.28675 6.28622C0.954368 5.72798 0.788175 5.10795 0.788175 4.42614C0.788175 3.91903 0.881925 3.44602 1.06942 3.0071C1.26119 2.56392 1.52539 2.17401 1.86204 1.83736C2.20295 1.50071 2.59712 1.23864 3.04457 1.05114C3.49627 0.859374 3.97994 0.763494 4.49556 0.763494ZM2.55238 4.42614C2.55238 4.77983 2.63974 5.10156 2.81445 5.39134C2.98917 5.68111 3.22354 5.91122 3.51758 6.08168C3.81161 6.25213 4.13761 6.33736 4.49556 6.33736C4.89613 6.33736 5.26474 6.24787 5.60139 6.06889C5.93803 5.88991 6.25124 5.66406 6.54102 5.39134C6.72425 5.21662 6.88192 5.0483 7.01403 4.88636C7.14613 4.72443 7.26119 4.57102 7.3592 4.42614C7.25693 4.28977 7.13548 4.13849 6.99485 3.9723C6.85849 3.80185 6.70721 3.63991 6.54102 3.48651C6.26829 3.21804 5.95934 2.99219 5.61417 2.80895C5.269 2.62145 4.89613 2.5277 4.49556 2.5277C4.13761 2.5277 3.81161 2.61506 3.51758 2.78977C3.22354 2.96023 2.98917 3.19034 2.81445 3.48011C2.63974 3.76562 2.55238 4.08097 2.55238 4.42614ZM14.3649 4.42614C14.3649 4.08097 14.2775 3.76562 14.1028 3.48011C13.9324 3.19034 13.7022 2.96023 13.4125 2.78977C13.1227 2.61506 12.801 2.5277 12.4473 2.5277C12.1745 2.5277 11.9146 2.57031 11.6674 2.65554C11.4203 2.74077 11.188 2.85582 10.9707 3.00071C10.7576 3.1456 10.5616 3.30753 10.3826 3.48651C10.1909 3.66548 10.0225 3.84872 9.87766 4.03622C9.73278 4.21946 9.62837 4.34943 9.56445 4.42614C9.67099 4.57528 9.79031 4.73082 9.92241 4.89276C10.0545 5.05043 10.2079 5.21662 10.3826 5.39134C10.6681 5.66406 10.9792 5.88991 11.3159 6.06889C11.6568 6.24787 12.0339 6.33736 12.4473 6.33736C12.801 6.33736 13.1227 6.25213 13.4125 6.08168C13.7022 5.91122 13.9324 5.68111 14.1028 5.39134C14.2775 5.10156 14.3649 4.77983 14.3649 4.42614Z"
                                    fill="#006838"
                                />
                            </svg>
                        }
                    />
                ) : (
                    <InvestStat
                        title={`${t('Срок займа')}:`}
                        value={`${ranges} ${declensionNum(ranges, [t('месяц'), t('месяца'), t('месяцев')])}`}
                    />
                ))}

            {myTotal && (
                <InvestStat
                    title={`${t('Сумма ваших инвестиций')}:`}
                    value={fCurrency(
                        renderCurrency({
                            usd: myTotal,
                            rub: currency.USD,
                            eur: currency.EUR,
                            currency: selected,
                        })
                    )}
                />
            )}
            {countTransaction && <InvestStat title={`${t('Кол-во транзакций')}:`} value={countTransaction} />}
        </Stack>
    );
};

export default InvestStats;
