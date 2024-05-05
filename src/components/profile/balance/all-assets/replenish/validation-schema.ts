import * as yup from 'yup';

export const validationSchemaStep1 = yup.object({
    transactionLinkType: yup.string().required(),
});
