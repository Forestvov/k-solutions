import * as yup from 'yup';

import { phoneRegExp } from '../regExp';

export const phoneSchema = yup
    .string()
    .required('Необходимо ввести телефон')
    .matches(phoneRegExp, 'Телефон введен некорректно');
