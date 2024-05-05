export interface FormState {
    amountIn: string | number;
    amountOut: string | number;
    priceTotal: string | number;
    commission: string | number;
    staticCurse: string | number;
    transactionId: string | number;
    transactionDate: string;
    transactionStatus: string;

    method: string;
    bank: string;
    nameCart: string;
    numberCart: string;
    dateCart: string;
    cvvCart: string;

    currencyToken: string;
    contact: string;
    qrCode: string;
    transactionLinkType: string;
}

export interface SelectorItem {
    logo: string;
    value: string;
}
