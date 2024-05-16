import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import styled from '@emotion/styled';

import { fCurrency } from 'helpers/number-format';
import { renderCurrency } from 'helpers/renderCurrency';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';
import { useCurrencyContext } from 'context/currency';

const Wrapper = styled(NavLink)`
    margin-left: auto;
    padding: 15px;
    background: #006838;
    border-radius: 10px;
    color: #fff;
    line-height: 19px;
    font-size: 0.9rem;
    text-decoration: none;

    @media (min-width: 768px) {
        margin-left: 30px;
        font-size: 1rem;
        padding: 16px 22px 15px;
    }

    @media (min-width: 1280px) {
        margin-left: 50px;
    }
`;

const Price = styled.span`
    font-weight: 600;
`;

const Balance = () => {
    // @ts-ignore
    const { user } = useAuthContext();
    const { t } = useTranslation('personal');
    const { userId } = useParams();

    const { selected, currency } = useCurrencyContext();
    if (userId) {
        return (
            <Wrapper to={`/${userId}/balance`}>
                {t('Баланс')}:{' '}
                {user.balance.balance ? (
                    <Price>
                        {fCurrency(
                            renderCurrency({
                                usd: user.balance.balance,
                                rub: currency.USD,
                                eur: currency.EUR,
                                currency: selected,
                            })
                        )}
                    </Price>
                ) : (
                    '$0'
                )}
            </Wrapper>
        );
    }

    return (
        <Wrapper to="/balance">
            {t('Баланс')}:{' '}
            {user.balance.balance ? (
                <Price>
                    {fCurrency(
                        renderCurrency({
                            usd: user.balance.briefcaseBalance,
                            rub: currency.USD,
                            eur: currency.EUR,
                            currency: selected,
                        })
                    )}
                </Price>
            ) : (
                '$0'
            )}
        </Wrapper>
    );
};

export default Balance;
