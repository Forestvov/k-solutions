import axios, { endpoints } from 'helpers/axios';

export const updateAccount = async (data: any) => {
    await axios.put(endpoints.account.update, data);
};

export const updatePasswordAccount = async (data: any) => {
    await axios.put(endpoints.account.changePassword, data);
};

interface RequestPhoto {
    file: string;
    typeFile: string;
}

export const addPhotoForAccount = async (data: RequestPhoto) => {
    await axios.post(endpoints.account.addPhoto, data);
};

export interface RequestFile {
    file: File;
    type: string;
}

export const addFileForAccount = async (data: RequestFile) => {
    await axios.post(endpoints.account.addFile, data);
};

interface RequestSetting {
    profileSettingsCode: string;
    value: string;
}

export const addSettingAccount = async (data: RequestSetting) => {
    await axios.post(endpoints.account.settingSet, data);
};
