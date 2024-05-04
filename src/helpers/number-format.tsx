export function fNumber(inputValue: number | string) {
    if (!inputValue) return '';

    const number = Number(inputValue);

    const fm = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(number);

    return fm;
}

export function fCurrency(inputValue: number | string) {
    if (!inputValue) return '';

    const number = Number(inputValue);

    const fm = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(number);

    return fm;
}

// ----------------------------------------------------------------------

export function fPercent(inputValue: number | string) {
    if (!inputValue) return '';

    const number = Number(inputValue) / 100;

    const fm = new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
    }).format(number);

    return fm;
}