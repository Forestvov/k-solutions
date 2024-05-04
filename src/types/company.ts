export type CompanyType = 'Company' | 'Franchise';

export interface ICompanyPag {
    id: number;
    companyName: string;
    descriptions: string;
    lang: string;
    companyType: CompanyType;
    logo: string;
    companyInvestDetailDtoList: IDescription[];
}

export interface IDescription {
    id: number;
    companyInvestDetailTypeId: number;
    companyInvestDetailTypeDescriptions: string;
    descriptions: string;
}

export interface ISlide {
    id: number;
    companyInvestId: number;
    file: string;
    fileType: string;
}
