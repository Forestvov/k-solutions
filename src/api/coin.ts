import axios from 'axios';

export const getCoinPrice = async (coin: string) => {
    return await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${coin.toUpperCase()}USDT`);
};
