import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { toBase64 } from 'helpers/toBase64';
import { addPhotoForAccount } from 'api/user';

import Title from '../title';
import OutlineBtn from './outline-btn';
import DefaultButton, { DefaultLink } from './default-button';
import FileLoaded from './file-loaded';

const GreenButton = styled(DefaultLink)`
    background: #20836d;
    color: #fff;
`;

const GreenDefaultButton = styled(DefaultButton)`
    background: #20836d;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
`;

const FileLoadedStyled = styled(FileLoaded)`
    height: 65px;
    display: flex;
    align-items: center;
`;

const Agreement = () => {
    const { t } = useTranslation('personal');

    const [fileMain, setFileMain] = useState<File | null>(null);
    const [success, setSetSuccess] = useState(false);

    const onSubmitDoc = async () => {
        if (fileMain) {
            try {
                const fileMainBase64 = await toBase64(fileMain);
                await addPhotoForAccount({
                    file: fileMainBase64,
                    typeFile: '',
                });
                setSetSuccess(true);
            } catch (e) {
                console.log(e);
            }
        }
    };

    const onChangeFile = (event: File | null) => {
        // 10mb > bite = 10 * 1024 * 1024 = 10485760
        if (event && event.size <= 10485760) {
            setFileMain(event);
        }
    };

    console.log(success);

    return (
        <Stack
            direction={{
                lg: 'row',
            }}
            spacing={{
                lg: '110px',
                xs: '30px',
            }}
            alignItems={{
                lg: 'center',
            }}
        >
            <Stack
                spacing="23px"
                sx={{
                    maxWidth: '868px',
                }}
            >
                <Title>{t('Договор о сотрудничестве')}</Title>
                <Typography variant="body1">
                    {t(
                        'Данный договор заключается между инвестором и компанией, скачайте и заполните его, а затем загрузите на платформу.'
                    )}
                </Typography>
            </Stack>
            <Stack
                spacing={{
                    xs: '20px',
                    sm: '30px',
                }}
            >
                <Stack
                    direction={{
                        sm: 'row',
                    }}
                    spacing={{
                        xs: '20px',
                        sm: '30px',
                    }}
                >
                    <GreenButton href="/Договор о сотрудничестве.docx" download="Договор о сотрудничестве">
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_544_5433)">
                                <path
                                    d="M12.5 0.5C10.0277 0.5 7.61099 1.23311 5.55538 2.60663C3.49976 3.98015 1.89761 5.93238 0.951511 8.21646C0.00541608 10.5005 -0.242126 13.0139 0.24019 15.4386C0.722505 17.8634 1.91301 20.0907 3.66117 21.8388C5.40933 23.587 7.63661 24.7775 10.0614 25.2598C12.4861 25.7421 14.9995 25.4946 17.2835 24.5485C19.5676 23.6024 21.5199 22.0002 22.8934 19.9446C24.2669 17.889 25 15.4723 25 13C25 9.68479 23.683 6.50537 21.3388 4.16117C18.9946 1.81696 15.8152 0.5 12.5 0.5ZM16.6005 21.0521H8.39949C8.12322 21.0521 7.85827 20.9423 7.66291 20.747C7.46756 20.5516 7.35782 20.2867 7.35782 20.0104C7.35782 19.7341 7.46756 19.4692 7.66291 19.2738C7.85827 19.0785 8.12322 18.9688 8.39949 18.9688H16.6005C16.8768 18.9688 17.1417 19.0785 17.3371 19.2738C17.5324 19.4692 17.6422 19.7341 17.6422 20.0104C17.6422 20.2867 17.5324 20.5516 17.3371 20.747C17.1417 20.9423 16.8768 21.0521 16.6005 21.0521ZM17.337 13.2167L13.2333 17.3229C13.038 17.5182 12.7731 17.6279 12.4969 17.6279C12.2207 17.6279 11.9558 17.5182 11.7604 17.3229L7.66303 13.226C7.46729 13.0307 7.35716 12.7656 7.35687 12.4891C7.35658 12.2126 7.46614 11.9473 7.66146 11.7516C7.85678 11.5558 8.12186 11.4457 8.39838 11.4454C8.6749 11.4451 8.94021 11.5547 9.13594 11.75L11.4583 14.0724V4.85677C11.4583 4.5805 11.5681 4.31555 11.7634 4.1202C11.9588 3.92485 12.2237 3.8151 12.5 3.8151C12.7763 3.8151 13.0412 3.92485 13.2366 4.1202C13.4319 4.31555 13.5417 4.5805 13.5417 4.85677V14.0661L15.8641 11.7438C16.0605 11.554 16.3237 11.449 16.5968 11.4514C16.8699 11.4538 17.1312 11.5633 17.3243 11.7564C17.5174 11.9496 17.627 12.2108 17.6294 12.484C17.6317 12.7571 17.5267 13.0202 17.337 13.2167Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_544_5433">
                                    <rect width="25" height="25" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        {t('Скачать')} Ru
                    </GreenButton>
                    <GreenButton href="/Agreement on cooperation.docx" download="Agreement on cooperation">
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_544_5433)">
                                <path
                                    d="M12.5 0.5C10.0277 0.5 7.61099 1.23311 5.55538 2.60663C3.49976 3.98015 1.89761 5.93238 0.951511 8.21646C0.00541608 10.5005 -0.242126 13.0139 0.24019 15.4386C0.722505 17.8634 1.91301 20.0907 3.66117 21.8388C5.40933 23.587 7.63661 24.7775 10.0614 25.2598C12.4861 25.7421 14.9995 25.4946 17.2835 24.5485C19.5676 23.6024 21.5199 22.0002 22.8934 19.9446C24.2669 17.889 25 15.4723 25 13C25 9.68479 23.683 6.50537 21.3388 4.16117C18.9946 1.81696 15.8152 0.5 12.5 0.5ZM16.6005 21.0521H8.39949C8.12322 21.0521 7.85827 20.9423 7.66291 20.747C7.46756 20.5516 7.35782 20.2867 7.35782 20.0104C7.35782 19.7341 7.46756 19.4692 7.66291 19.2738C7.85827 19.0785 8.12322 18.9688 8.39949 18.9688H16.6005C16.8768 18.9688 17.1417 19.0785 17.3371 19.2738C17.5324 19.4692 17.6422 19.7341 17.6422 20.0104C17.6422 20.2867 17.5324 20.5516 17.3371 20.747C17.1417 20.9423 16.8768 21.0521 16.6005 21.0521ZM17.337 13.2167L13.2333 17.3229C13.038 17.5182 12.7731 17.6279 12.4969 17.6279C12.2207 17.6279 11.9558 17.5182 11.7604 17.3229L7.66303 13.226C7.46729 13.0307 7.35716 12.7656 7.35687 12.4891C7.35658 12.2126 7.46614 11.9473 7.66146 11.7516C7.85678 11.5558 8.12186 11.4457 8.39838 11.4454C8.6749 11.4451 8.94021 11.5547 9.13594 11.75L11.4583 14.0724V4.85677C11.4583 4.5805 11.5681 4.31555 11.7634 4.1202C11.9588 3.92485 12.2237 3.8151 12.5 3.8151C12.7763 3.8151 13.0412 3.92485 13.2366 4.1202C13.4319 4.31555 13.5417 4.5805 13.5417 4.85677V14.0661L15.8641 11.7438C16.0605 11.554 16.3237 11.449 16.5968 11.4514C16.8699 11.4538 17.1312 11.5633 17.3243 11.7564C17.5174 11.9496 17.627 12.2108 17.6294 12.484C17.6317 12.7571 17.5267 13.0202 17.337 13.2167Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_544_5433">
                                    <rect width="25" height="25" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        {t('Скачать')} Eng
                    </GreenButton>
                </Stack>
                <Stack
                    direction={{
                        sm: 'row',
                    }}
                    spacing={{
                        xs: '20px',
                        sm: '30px',
                    }}
                >
                    {fileMain ? (
                        <FileLoadedStyled>
                            <span>
                                {fileMain.name}
                                <button onClick={() => setFileMain(null)}>x</button>
                            </span>
                        </FileLoadedStyled>
                    ) : (
                        <FileUploader multiple={false} handleChange={(file: File) => onChangeFile(file)} name="MAIN">
                            <OutlineBtn text={t('Загрузить Подписанный')} />
                        </FileUploader>
                    )}
                    <div>
                        {fileMain ? (
                            <GreenDefaultButton onClick={onSubmitDoc}>{t('Отправить')}</GreenDefaultButton>
                        ) : null}
                    </div>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Agreement;