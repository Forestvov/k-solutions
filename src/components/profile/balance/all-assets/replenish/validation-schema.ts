import * as yup from 'yup';

export const validationSchemaStep1 = yup.object({
    method: yup.string().required(),
    price: yup.number().required(),
});
