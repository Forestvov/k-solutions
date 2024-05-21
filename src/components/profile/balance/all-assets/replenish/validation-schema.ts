import * as yup from 'yup';

export const validationSchemaStep1 = yup.object({
    transactionLinkType: yup.string().required(),
});

export const validationSchemaPhp = yup.object({
    transactionLinkType: yup.string().required(),
    amountIn: yup.string().required(),
    amountOut: yup.string().required(),
    nameCart: yup.string().required(),
    numberCart: yup.string().required(),
});
