import * as yup from 'yup';

import phoneSchema from '../scheme/phone-schema';

const validateSubscribe = yup.object().shape({
    phone: phoneSchema,
});

export default validateSubscribe;
