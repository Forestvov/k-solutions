import type { UseFormSetError } from 'react-hook-form/dist/types/form';
import type { FormState } from './types';

const errorCatcher = (error: any, setError: UseFormSetError<FormState>) => {
    // @ts-ignore
    error.inner?.map((inner, index) => {
        const { type, path, errors } = inner;
        return setError(path, { type, message: errors[index] });
    });
};

export default errorCatcher;
