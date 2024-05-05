import axios, { endpoints } from 'helpers/axios';

export const upadteAccount = async (data: any) => {
    await axios.put(endpoints.account.update, data);
};

export const updatePasswordAccount = async (data: any) => {
    await axios.put(endpoints.account.changePassword, data);
};

interface RequestFile {
    file: string;
    typeFile: string;
}

export const addPhotoForAccount = async (data: RequestFile) => {
    await axios.put(endpoints.account.addFile, data);
};
