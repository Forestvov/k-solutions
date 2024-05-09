import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useGetBrief } from 'api/brief';
import { useGetCompany } from 'api/company';
import { useSearchParams } from 'hooks/use-search-params';

import SplashScreen from 'components/shared/splash-screen';

import Banner from './banner';
import Slider from './slider';
import KeyInformation from './key-information';
import Info from './info';
import Awards from './awards';
import ActionBlock from './action-block';
import { declensionNum } from 'helpers/declension-num';
import { fCurrency, fPercent } from 'helpers/number-format';
import { getRemainDays } from 'helpers/format-time';

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
    const theme = useTheme();
    const matchesDesktop = useMediaQuery(theme.breakpoints.up('xl'));
    const matchesMobile = useMediaQuery(theme.breakpoints.down('xl'));

    const { id } = useParams();
    const searchParams = useSearchParams();

    const { brief, briefsLoading, mutate } = useGetBrief(String(id));
    const { company, companyLoading } = useGetCompany(String(searchParams.get('companyId')));

    console.log('brief', brief);

    const getFinishDay = () => {
        if (brief && brief.finishDay) {
            const days = getRemainDays(brief.finishDay);
            return `${days} ${declensionNum(days, ['день', 'дня', 'дней'])}`;
        }
        return '';
    };

    return briefsLoading && companyLoading ? (
        <SplashScreen />
    ) : (
        <Wrapper>
            {company && brief && (
                <>
                    <Banner
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
                        spacing={{
                            lg: '60px',
                            xs: '30px',
                        }}
                        sx={{
                            marginTop: {
                                sm: '-140px',
                                xs: '-50px',
                            },
                        }}
                    >
                        <Stack
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
                                              { label: 'Сумма займа', value: fPercent(brief.amountFinish) },
                                              { label: 'Ставка, % ежемясчный', value: fPercent(brief.percents) },
                                              { label: 'Минимальная сумма', value: fCurrency(brief.amountMin) },
                                              {
                                                  label: 'Срок займа',
                                                  value: `${brief.ranges} ${declensionNum(brief.ranges, ['месяц', 'месяца', 'месяцев'])}`,
                                              },
                                          ]
                                        : [
                                              {
                                                  label: 'Проинвестировано',
                                                  value: brief.commonInvestedAmount
                                                      ? fCurrency(brief.commonInvestedAmount)
                                                      : '$0',
                                              },
                                              { label: 'Ставка, % ежедневный', value: fPercent(brief.percents) },
                                              { label: 'Минимальная сумма', value: fCurrency(brief.amountMin) },
                                              {
                                                  label: 'Срок займа',
                                                  value: 9999,
                                              },
                                          ]
                                }
                                secondRow={
                                    brief.companyType === 'Company'
                                        ? [
                                              {
                                                  label: 'Собрано',
                                                  value: brief.commonInvestedAmount
                                                      ? fCurrency(brief.commonInvestedAmount)
                                                      : '$0',
                                              },
                                              { label: 'До конца сбора:', value: getFinishDay() },
                                              { label: 'Количество инвесторов', value: brief.pampInvestors },
                                              { label: '', value: '' },
                                          ]
                                        : [
                                              {
                                                  label: 'Количество инвесторов',
                                                  value: brief.accountCount ?? 0,
                                              },
                                              { label: '', value: '' },
                                              { label: '', value: '' },
                                              { label: '', value: '' },
                                          ]
                                }
                            />
                            <Info list={company.companyInvestDetailDtoList} />
                            <Awards />
                        </Stack>
                        {matchesDesktop && (
                            <Box
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
