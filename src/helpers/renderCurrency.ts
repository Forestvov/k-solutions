interface Prop {
    usd: number;
    rub: number;
    eur?: number;
    currency?: string;
}

export const renderCurrency = ({ eur = 1, rub, usd, currency }: Prop) => {
    switch (currency) {
        case 'RUB':
            return usd * rub;
        case 'EUR':
            return (usd * rub) / eur;
        default:
            return usd;
    }
};
