import * as yup from 'yup';
import { phoneSchema } from 'helpers/scheme/phone-schema';

export const validateForm = yup.object().shape({
    phone: phoneSchema,
});
