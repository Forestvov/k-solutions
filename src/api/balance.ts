import axios from 'axios';
import { xml2js } from 'xml-js';

export const getCurrency = async (code: string) => {
    const res = await axios.get(`https://www.cbr.ru/scripts/XML_daily.asp`);
    const data = await res.data;

    return await xml2js(data)
        // @ts-ignore
        // eslint-disable-next-line no-return-assign
        .elements[0].elements.find((item) => item.attributes.ID === code)
        // @ts-ignore
        .elements.find((item) => item.name === 'Value').elements[0].text;
};
