import * as yup from 'yup';

import phoneSchema from 'helpers/scheme/phone-schema';
import emailSchema from 'helpers/scheme/email-schema';

const schema = {
    password: yup.string().required('Необходимо ввести пароль'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли не совпадают')
        .required('Required'),
};

export const validateStep2Investor = yup.object({
    im: yup.string().required(),
    fam: yup.string().required(),
    userName: yup.string().required(),
    email: emailSchema,
});

export const validateStep2Company = yup.object({
    companyName: yup.string().required(),
    numberCompany: yup.string().required(),
    famCeo: yup.string().required(),
});

export const validateStep3Investor = yup.object({
    country: yup.string().required(),
    phoneNumber: phoneSchema,
    password: schema.password,
    confirmPassword: schema.confirmPassword,
});

export const validateStep3Company = yup.object({
    country: yup.string().required(),
    phoneNumber: phoneSchema,
    email: emailSchema,
    password: schema.password,
});
