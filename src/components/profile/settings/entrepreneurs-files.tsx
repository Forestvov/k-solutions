import { FileUploader } from 'react-drag-drop-files';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import OutlineBtn from 'components/profile/settings/outline-btn';
import { useTranslation } from 'react-i18next';
import { useAuthContext } from 'context/auth/hooks/useAuthContext';
import { addPhotoForAccount, addSettingAccount } from 'api/user';
import { toBase64 } from 'helpers/toBase64';

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
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_552_5974)">
                        <path
                            d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
                            fill="#32BA7C"
                        />
                        <path
                            d="M9.30664 18.1389L15.7341 24.5663C21.0574 23.1468 25.0006 18.2966 25.0006 12.5001V12.1452L19.9533 7.49219L9.30664 18.1389Z"
                            fill="#0AA06E"
                        />
                        <path
                            d="M12.8151 15.2992C13.3672 15.8513 13.3672 16.7977 12.8151 17.3497L11.6716 18.4933C11.1196 19.0453 10.1732 19.0453 9.62114 18.4933L4.61326 13.4459C4.06121 12.8939 4.06121 11.9475 4.61326 11.3955L5.75679 10.2519C6.30884 9.69988 7.25521 9.69988 7.80726 10.2519L12.8151 15.2992Z"
                            fill="white"
                        />
                        <path
                            d="M17.1926 6.58494C17.7447 6.03289 18.6911 6.03289 19.2431 6.58494L20.3866 7.72847C20.9387 8.28052 20.9387 9.22689 20.3866 9.77894L11.7116 18.4146C11.1595 18.9666 10.2131 18.9666 9.66109 18.4146L8.51755 17.2711C7.9655 16.719 7.9655 15.7726 8.51755 15.2206L17.1926 6.58494Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_552_5974">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div>{t('Загруженно')}</div>
            </Stack>
        );
    };

    // @ts-ignore
    const { user, update } = useAuthContext();

    const onChangeFile = async (file: File, name: string) => {
        try {
            const fileBase64 = await toBase64(file);
            await addPhotoForAccount({
                file: fileBase64,
                typeFile: file.name.split('.').pop() ?? 'doc',
            });
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
