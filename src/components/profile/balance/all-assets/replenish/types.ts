export interface FormState {
    amount: string | number;
    priceTotal: string | number;
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
