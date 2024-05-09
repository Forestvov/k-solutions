import type { Pageable } from 'types/pageable';

export interface IToken {
    currencyTypeId: number;
    currentName: string;
    value: string;
    image: string;
    qrCode: string;
    transactionLinkType: string;
    commission: number;
    staticCurse: number;
}

export interface IHistoryResponse {
    content: IHistory[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export type StatusType = 'Success' | 'Process' | 'Canceled' | 'Marked as paid' | 'Wait requisites';

export interface IHistory {
    transactionId: number;
    accountId: number;
    email: string;
    accountTypeName: string;
    transactionType: 'In' | 'Out';
    transactionStatus: StatusType;
    transactionDate: string;
    currentName: string;
    typePay: string;
    amountIn: number;
    amountOut?: number;
    amount?: number;
    fio: string;
    username: string;
    image: string;
    contact: string;
    contactFrom?: string;
    qrCode: string;
    transactionLinkType: string;
}
