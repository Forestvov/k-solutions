import { useTranslation } from 'react-i18next';
import { FileUploader } from 'react-drag-drop-files';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';

import { addFileForAccount, addSettingAccount } from 'api/user';

import LoadedIcon from 'assets/load/loaded-icon.svg?react';

import OutlineBtn from 'components/profile/settings/outline-btn';

const Label = styled.div`
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 39px;
    color: #000000;

    @media (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const EntrepreneursFiles = () => {
    const { t } = useTranslation('personal');

    const renderSuccess = () => {
        return (
            <Stack
                direction="row"
                alignItems="center"
                spacing="10px"
                sx={{
                    color: '#5A5A5A',
                    fontSize: '16px',
                }}
            >
                <LoadedIcon />
                <div>{t('Загруженно')}</div>
            </Stack>
        );
    };

    // @ts-ignore
    const { user, update } = useAuthContext();

    const onChangeFile = async (file: File, name: string) => {
        try {
            const formDate = new FormData();
            formDate.append('file', file);
            formDate.append('type', name);
            // @ts-ignore
            await addFileForAccount(formDate);
            await addSettingAccount({ profileSettingsCode: name, value: 'true' });
            await update();
        } catch (e) {
            console.log(e);
        }
    };

    // @ts-ignore
    const isLegal1c = user?.profileSetting?.find((item) => item?.profileSettingCode === 'legal.1c');
    // @ts-ignore
    const isLegalBankStatements = user?.profileSetting?.find(
        // @ts-ignore
        (item) => item?.profileSettingCode === 'legal.bank_statements'
    );
    // @ts-ignore
    const isLegalOOO = user?.profileSetting?.find((item) => item?.profileSettingCode === 'legal.OOO');
    // @ts-ignore
    const isLegalUSRLE = user?.profileSetting?.find((item) => item?.profileSettingCode === 'legal.USRLE');

    return (
        <Stack
            spacing={{
                lg: '60px',
                xs: '30px',
            }}
            sx={{
                maxWidth: '966px',
            }}
        >
            <Stack
                spacing={{
                    sm: 0,
                    xs: '5px',
                }}
                direction={{
                    sm: 'row',
                }}
                alignItems={{
                    sm: 'center',
                }}
                justifyContent={{
                    sm: 'space-between',
                }}
            >
                <Label>Выписки по счетам 1С</Label>
                {isLegal1c ? (
                    renderSuccess()
                ) : (
                    <FileUploader
                        multiple={false}
                        handleChange={(file: File) => onChangeFile(file, 'legal.1c')}
                        name="legal.1c"
                    >
                        <OutlineBtn text={t('Загрузить Подписанный')} />
                    </FileUploader>
                )}
            </Stack>
            <Stack
                spacing={{
                    sm: 0,
                    xs: '5px',
                }}
                direction={{
                    sm: 'row',
                }}
                alignItems={{
                    sm: 'center',
                }}
                justifyContent={{
                    sm: 'space-between',
                }}
            >
                <Label>Банковские выписки</Label>
                {isLegalBankStatements ? (
                    renderSuccess()
                ) : (
                    <FileUploader
                        multiple={false}
                        handleChange={(file: File) => onChangeFile(file, 'legal.bank_statements')}
                        name="legal.bank_statements"
                    >
                        <OutlineBtn text={t('Загрузить Подписанный')} />
                    </FileUploader>
                )}
            </Stack>
            <Stack
                spacing={{
                    sm: 0,
                    xs: '5px',
                }}
                direction={{
                    sm: 'row',
                }}
                alignItems={{
                    sm: 'center',
                }}
                justifyContent={{
                    sm: 'space-between',
                }}
            >
                <Label>Документ ООО</Label>
                {isLegalOOO ? (
                    renderSuccess()
                ) : (
                    <FileUploader
                        multiple={false}
                        handleChange={(file: File) => onChangeFile(file, 'legal.OOO')}
                        name="legal.OOO"
                    >
                        <OutlineBtn text={t('Загрузить Подписанный')} />
                    </FileUploader>
                )}
            </Stack>
            <Stack
                spacing={{
                    sm: 0,
                    xs: '5px',
                }}
                direction={{
                    sm: 'row',
                }}
                alignItems={{
                    sm: 'center',
                }}
                justifyContent={{
                    sm: 'space-between',
                }}
            >
                <Label>Выписка из ЕГРЮЛ</Label>
                {isLegalUSRLE ? (
                    renderSuccess()
                ) : (
                    <FileUploader
                        multiple={false}
                        handleChange={(file: File) => onChangeFile(file, 'legal.USRLE')}
                        name="legal.USRLE"
                    >
                        <OutlineBtn text={t('Загрузить Подписанный')} />
                    </FileUploader>
                )}
            </Stack>
        </Stack>
    );
};

export default EntrepreneursFiles;
