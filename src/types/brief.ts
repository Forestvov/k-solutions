import type { Pageable } from './pageable';

export interface HotBriefResponse {
    content: IBrief[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}

export interface IBrief {
    briefcase_language_id: number;
    briefcaseId: number;
    company_invest_id: number;
    image: string;
    lang: string;
    descriptions: string;
    logo: string;
    percents: number;
    companyInvestId: number;
    briefcaseName: string;
    companyName: string;
    briefcaseStatus: string;
    companyType: string;
    amount: number;
    amountFinish: number;
    amountMin: number;
    accountCount: number;
    accountCountId: number;
    percentFinish: number;
    finishDay: string;
    createdDate: string;
    isActive: boolean;
}

export interface IBriefPage {
    briefcaseId: number;
    briefcaseName: string;
    lang: string;
    briefcaseStatus: string;
    amountMin: number;
    amountFinish: number;
    ranges: number;
    percents: number;
    image: any;
    companyInvestId: number;
    finishDay: string;
    createdDate: string;
    pampAmount: number;
    pampInvestors: number;
    isActive: boolean;
    companyType: string;
}
