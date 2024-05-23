import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStickyBox } from 'react-sticky-box';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useGetBrief } from 'api/brief';
import { useGetCompany } from 'api/company';
import { useSearchParams } from 'hooks/use-search-params';

import { declensionNum } from 'helpers/declension-num';
import { fCurrency, fPercent } from 'helpers/number-format';
import { getRemainDays } from 'helpers/format-time';

import SplashScreen from 'components/shared/splash-screen';

import { useCurrencyContext } from 'context/currency';

import Banner from './banner';
import Slider from './slider';
import KeyInformation from './key-information';
import Info from './info';
import Awards from './awards';
import ActionBlock from './action-block';
import { renderCurrency } from 'helpers/renderCurrency';

const Wrapper = styled.div`
    padding: 0 15px 20px;
    background: #fff;
    border-radius: 35px;

    @media (min-width: 768px) {
        padding: 0 30px 30px;
    }

    @media (min-width: 1668px) {
        padding: 0 90px 90px;
    }
`;

const ShowcasesItem = () => {
    const { t, i18n } = useTranslation('personal');
    const { selected, currency } = useCurrencyContext();

    const theme = useTheme();
    const matchesDesktop = useMediaQuery(theme.breakpoints.up('xl'));
    const matchesMobile = useMediaQuery(theme.breakpoints.down('xl'));

    const stickyRef = useStickyBox({ offsetTop: 20 });

    const { id } = useParams();
    const searchParams = useSearchParams();

    const { brief, briefsLoading, mutate } = useGetBrief(String(id), i18n.language);
    const { company, companyLoading } = useGetCompany(String(searchParams.get('companyId')), i18n.language);

    const getFinishDay = () => {
        if (brief && brief.finishDay) {
            const days = getRemainDays(brief.finishDay);
            return `${days} ${declensionNum(days, [t('день'), t('дня'), t('дней')])}`;
        }
        return '';
    };

    if (briefsLoading && companyLoading) {
        return <SplashScreen />;
    }

    console.log(brief);

    return (
        <Wrapper>
            {company && brief && (
                <>
                    <Banner
                        bg={brief.image}
                        countTransaction={brief.myCountTransaction}
                        myTotal={brief.myInvestAmount}
                        description={company.descriptions}
                        logo={company.logo}
                        name={company.companyName}
                        companyType={company.companyType}
                        showClose={brief.isActive}
                    />
                    <Stack
                        direction="row"
                        alignItems="flex-start"
                        spacing={{
                            lg: '60px',
                            xs: '30px',
                        }}
                        sx={{
                            position: 'relative',
                            zIndex: '1',
                            marginTop: {
                                sm: '-140px',
                                xs: '-50px',
                            },
                        }}
                    >
                        <Stack
                            sx={{
                                overflow: 'hidden',
                            }}
                            spacing={{
                                lg: '60px',
                                xs: '30px',
                            }}
                        >
                            <Slider />
                            {matchesMobile && (
                                <ActionBlock
                                    isActive={brief.isActive}
                                    countTransaction={brief.myCountTransaction}
                                    myTotal={brief.myInvestAmount}
                                    percents={brief.percents}
                                    finishDay={brief.finishDay}
                                    amountFinish={brief.amountFinish}
                                    companyType={company.companyType}
                                    ranges={brief.ranges}
                                    amountMin={brief.amountMin}
                                    amount={brief.commonInvestedAmount}
                                    accountCount={brief.accountCount ?? 0}
                                    updateBrief={mutate}
                                    briefcaseStatus={brief.briefcaseStatus}
                                />
                            )}
                            <KeyInformation
                                firstRow={
                                    brief.companyType === 'Company'
                                        ? [
                                              {
                                                  label: t('Сумма займа'),
                                                  value: fCurrency(
                                                      renderCurrency({
                                                          usd: brief.amountFinish,
                                                          rub: currency.USD,
                                                          eur: currency.EUR,
                                                          currency: selected,
                                                      })
                                                  ),
                                              },
                                              { label: t('Ставка, % ежемясчный'), value: fPercent(brief.percents) },
                                              {
                                                  label: t('Минимальная сумма'),
                                                  value: fCurrency(
                                                      renderCurrency({
                                                          usd: brief.amountMin,
                                                          rub: currency.USD,
                                                          eur: currency.EUR,
                                                          currency: selected,
                                                      })
                                                  ),
                                              },
                                              {
                                                  label: t('Срок займа'),
                                                  value: `${brief.ranges} ${declensionNum(brief.ranges, [t('месяц'), t('месяца'), t('месяцев')])}`,
                                              },
                                          ]
                                        : [
                                              {
                                                  label: t('Проинвестировано'),
                                                  value: brief.commonInvestedAmount
                                                      ? fCurrency(
                                                            renderCurrency({
                                                                usd: brief.commonInvestedAmount,
                                                                rub: currency.USD,
                                                                eur: currency.EUR,
                                                                currency: selected,
                                                            })
                                                        )
                                                      : '$0',
                                              },
                                              { label: t('Ставка, % ежедневный'), value: fPercent(brief.percents) },
                                              {
                                                  label: t('Минимальная сумма'),
                                                  value: fCurrency(
                                                      renderCurrency({
                                                          usd: brief.amountMin,
                                                          rub: currency.USD,
                                                          eur: currency.EUR,
                                                          currency: selected,
                                                      })
                                                  ),
                                              },
                                              {
                                                  label: t('Срок займа'),
                                                  value: 9999,
                                              },
                                          ]
                                }
                                secondRow={
                                    brief.companyType === 'Company'
                                        ? [
                                              {
                                                  label: t('Собрано'),
                                                  value: brief.commonInvestedAmount
                                                      ? fCurrency(
                                                            renderCurrency({
                                                                usd: brief.commonInvestedAmount,
                                                                rub: currency.USD,
                                                                eur: currency.EUR,
                                                                currency: selected,
                                                            })
                                                        )
                                                      : '$0',
                                              },
                                              {
                                                  label: `${t('До конца сбора')}:`,
                                                  value: getFinishDay(),
                                                  hide: brief.briefcaseStatus !== 'In progress',
                                              },
                                              { label: t('Количество инвесторов'), value: brief.accountCount },
                                              { label: '', value: '' },
                                          ]
                                        : [
                                              {
                                                  label: t('Количество инвесторов'),
                                                  value: brief.accountCount ?? 0,
                                              },
                                              { label: '', value: '' },
                                              { label: '', value: '' },
                                              { label: '', value: '' },
                                          ]
                                }
                            />
                            <Info list={company.companyInvestDetailDtoList} />
                            {company.companyType === 'Company' && <Awards />}
                        </Stack>
                        {matchesDesktop && (
                            <Box
                                ref={stickyRef}
                                maxWidth={{
                                    lg: '510px',
                                    xs: '400px',
                                }}
                                flex="0 0 auto"
                                width="100%"
                            >
                                <ActionBlock
                                    isActive={brief.isActive}
                                    countTransaction={brief.myCountTransaction}
                                    myTotal={brief.myInvestAmount}
                                    percents={brief.percents}
                                    finishDay={brief.finishDay}
                                    amountFinish={brief.amountFinish}
                                    companyType={company.companyType}
                                    ranges={brief.ranges}
                                    amountMin={brief.amountMin}
                                    amount={brief.commonInvestedAmount}
                                    accountCount={brief.accountCount ?? 0}
                                    updateBrief={mutate}
                                    briefcaseStatus={brief.briefcaseStatus}
                                />
                            </Box>
                        )}
                    </Stack>
                </>
            )}
        </Wrapper>
    );
};

export default ShowcasesItem;
