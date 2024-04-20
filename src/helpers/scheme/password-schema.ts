import * as yup from 'yup';

const passwordSchema = yup.string().required('Необходимо ввести пароль');

export default passwordSchema;
