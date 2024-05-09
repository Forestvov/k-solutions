import axios from 'axios';

export const getCurrency = async () => {
    const res = await axios.get(
        `https://currate.ru/api/?get=rates&pairs=USDRUB,EURRUB,EURRUB,GBPRUB,JPYRUB,CNYRUB&key=b16375d2fe0afadb87990a2894839ace`
    );
    return await res.data;
};
