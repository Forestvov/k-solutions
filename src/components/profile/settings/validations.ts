import * as yup from 'yup';

export const validateSecurity = yup.object().shape({
    oldPassword: yup.string().required('Необходимо ввести пароль'),
    repeatOldPassword: yup
        .string()
        .oneOf([yup.ref('oldPassword')], 'Пароли не совпадают')
        .required('Необходимо ввести пароль'),
    newPassword: yup.string().required('Необходимо ввести пароль'),
    repeatNewPassword: yup
        .string()
        .oneOf([yup.ref('newPassword')], 'Пароли не совпадают')
        .required('Необходимо ввести пароль'),
});
