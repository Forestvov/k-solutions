import * as yup from 'yup';

import emailSchema from '../scheme/email-schema';

const validateRestore = yup.object().shape({
    email: emailSchema,
});

export default validateRestore;
