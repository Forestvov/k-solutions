import type { Pageable } from './pageable';
import type { CompanyType } from './company';

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

export type BriefcaseStatusType = 'Loan payed' | 'Collection completed' | 'In progress';

export interface IBrief {
    briefcase_language_id: number;
    briefcaseId: number;
    company_invest_id: number;
    image: string;
    briefcaseImage: string;
    lang: string;
    descriptions: string;
    logo: string;
    percents: number;
    companyInvestId: number;
    briefcaseName: string;
    companyName: string;
    briefcaseStatus: BriefcaseStatusType;
    companyType: CompanyType;
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
    accountCount: number;
    briefcaseId: number;
    commonInvestedAmount: number;
    briefcaseName: string;
    lang: string;
    briefcaseStatus: BriefcaseStatusType;
    amountMin: number;
    amountFinish: number;
    myCountTransaction: number;
    myInvestAmount: number;
    ranges: number;
    percents: number;
    image: string;
    companyInvestId: number;
    totalInvestedAmount: number;
    finishDay: string;
    createdDate: string;
    pampAmount: number;
    pampInvestors: number;
    isActive: boolean;
    companyType: string;
}

export interface IResponseMyBrief {
    content: IMyBrief[];
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

export interface IMyBrief {
    briefcaseAccountCommonView: BriefcaseAccountCommonView;
    briefcaseAccountCommonInvestView: BriefcaseAccountCommonInvestView;
}

export interface BriefcaseAccountCommonView {
    briefcaseLanguageId: number;
    briefcaseId: number;
    briefcaseImage: any;
    lang: string;
    descriptions: string;
    logo: string;
    percents: number;
    companyInvestId: number;
    briefcaseName: string;
    companyName: string;
    briefcaseStatus: BriefcaseStatusType;
    companyType: CompanyType;
    amount: number;
    amountFinish: number;
    amountMin: number;
    accountCount: number;
    percentFinish: number;
    finishDay?: string;
    createdDate: string;
    isActive: any;
}

export interface BriefcaseAccountCommonInvestView {
    briefcaseId: number;
    briefcaseName: string;
    briefcaseStatus: BriefcaseStatusType;
    percents: number;
    companyInvestId: number;
    companyInvestName: string;
    companyType: CompanyType;
    accountId: number;
    email: string;
    username: string;
    fam: string;
    companyName: any;
    sum: number;
    count: number;
}

export interface IResponseAnalitic {
    analiticActiveView: AnaliticActiveView[];
    analiticActiveGainView: AnaliticActiveGainView[];
}

export interface AnaliticActiveView {
    accountId: number;
    companyId: number;
    companyName: string;
    amount: number;
}

export interface AnaliticActiveGainView {
    accountId: number;
    companyType: CompanyType;
    amount: number;
}

export interface AnaliticGainView {
    accountId: number;
    companyType: CompanyType;
    gainDate: string;
    amount: number;
}

//
export interface IResponseHistory {
    page: Page;
    gainSum: any;
    briefcaseCount: any;
}

export interface Page {
    content: IHistoryRow[];
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

export interface IHistoryRow {
    briefcaseAccountGainId: number;
    accountId: number;
    briefcaseId: number;
    briefcaseName: string;
    companyName: string;
    companyType: string;
    accounTypeName: string;
    accountCompanyName: string;
    numberCompany: number;
    image: string;
    briefcaseAmount: number;
    percents: number;
    briefcaseAccountAmount: number;
    gainAmount: number;
    lang: string;
    createdDate: string;
}
