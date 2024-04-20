import * as yup from 'yup';

const phoneSchema = yup.string().required('Необходимо ввести телефон');

export default phoneSchema;
