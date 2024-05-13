export interface FormStateSecurity {
    oldPassword: string;
    newPassword: string;
    repeatOldPassword: string;
    repeatNewPassword: string;
}

export interface FormStateAccount {
    name: string;
    fio: string;
    username: string;
    email: string;
    phoneNumber: string;
    country: string;
}

export interface FormStateCompany {
    numberCompany: string;
    numberPhone: string;
    famCeo: string;
    companyName: string;
    email: string;
}
