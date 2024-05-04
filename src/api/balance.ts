import axios from 'axios';
import { xml2js } from 'xml-js';
import { fDateCurrent } from 'helpers/format-time';

export const getCurrency = async (code: string) => {
    const res = await axios.get(
        `https://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=${fDateCurrent()}&date_req2=${fDateCurrent()}&VAL_NM_RQ=${code}`
    );
    const data = await res.data;
    return xml2js(data);
};
