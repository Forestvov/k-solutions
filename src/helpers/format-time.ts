import { format } from 'date-fns';
import i18n from 'i18next';
import { de, enUS, ru } from 'date-fns/locale';

const getLocale = (lang: string) => {
    switch (lang) {
        case 'ru':
            return ru;
        case 'de':
            return de;
        default:
            return enUS;
    }
};

export function fDate(date: string, newFormat?: string) {
    const fm = newFormat || 'dd MMM yyyy';

    return date
        ? format(new Date(date), fm, {
              locale: getLocale(i18n.language),
          })
        : '';
}

export function fTime(date: string, newFormat?: string) {
    const fm = newFormat || 'p';

    return date ? format(new Date(date), fm) : '';
}

export function fDateCurrent() {
    const fm = 'dd/MM/yyyy';

    return format(new Date(), fm, {});
}

export const clearDate = (date: string, getTime?: boolean): string => {
    const formDate = new Date(date);

    const day = formDate.getDate();
    const month = formDate.getMonth() + 1;
    const year = formDate.getFullYear();

    const dateStr = `${day > 9 ? day : `0${day}`}.${month > 9 ? month : `0${month}`}.${year}`;

    if (getTime) {
        const hours = formDate.getHours();
        const minutes = formDate.getMinutes();

        return `${dateStr}, ${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}`;
    }

    return dateStr;
};

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
