import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export function fDate(date: string, newFormat?: string) {
    const fm = newFormat || 'dd MMM yyyy';

    return date
        ? format(new Date(date), fm, {
              locale: ru,
          })
        : '';
}

export function fDateCurrent() {
    const fm = 'dd/MM/yyyy';

    return format(new Date(), fm, {});
}

export function isAfter(startDate: Date | null, endDate: Date | null) {
    const results = startDate && endDate ? new Date(startDate).getTime() > new Date(endDate).getTime() : false;

    return results;
}

export const getRemainDays = (createddate: string): number => {
    const date = new Date(createddate);
    const currentDate = new Date();

    // @ts-ignore
    const diffTime = Math.abs(currentDate - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays - 1;
};
