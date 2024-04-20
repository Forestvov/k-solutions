export type FormInputs =
    | 'email'
    | 'userName'
    | 'phoneNumber'
    | 'password'
    | 'confirmPassword'
    | 'country'
    | 'fam'
    | 'im'
    | 'companyName'
    | 'numberCompany'
    | 'famCeo';

export type AccountType = 'Investor' | 'Company';

export interface FormState extends Record<FormInputs, string> {
    accountType: AccountType;
}
