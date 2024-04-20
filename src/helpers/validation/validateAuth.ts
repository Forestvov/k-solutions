import * as yup from 'yup';

import emailSchema from '../scheme/email-schema';
import passwordSchema from '../scheme/password-schema';

const validateAuth = yup.object().shape({
    email: emailSchema,
    password: passwordSchema,
});

export default validateAuth;
