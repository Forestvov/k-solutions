import axios, { endpoints } from 'helpers/axios';

export const updateAccount = async (data: any) => {
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
    await axios.post(endpoints.account.addFile, data);
};

interface RequestSetting {
    profileSettingsCode: string;
    value: string;
}

export const addSettingAccount = async (data: RequestSetting) => {
    await axios.post(endpoints.account.settingSet, data);
};
