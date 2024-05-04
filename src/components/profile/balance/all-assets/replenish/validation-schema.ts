import * as yup from 'yup';

export const validationSchemaStep1 = yup.object({
    currencyToken: yup.string().required(),
    amount: yup.number().required(),
});
