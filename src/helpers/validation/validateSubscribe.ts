import * as yup from 'yup';

import phoneSchema from '../scheme/phone-schema';

const validateSubscribe = yup.object().shape({
    phoneNumber: phoneSchema,
});

export default validateSubscribe;
