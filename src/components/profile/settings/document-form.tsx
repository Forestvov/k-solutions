import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Button, Typography } from '@mui/material';

import styled from '@emotion/styled';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Title from '../title';

import DefaultButton from './default-button';
import OutlineBtn from 'components/profile/settings/outline-btn';

const FileWraper = styled(Stack)`
    label {
        width: 100%;
    }
`;

const FileInput = styled(Stack)`
    height: 376px;
    border: 3px dashed #006838;
    border-radius: 35px;
    background: #f6f7f8;
    padding: 30px;
    text-align: center;
`;

const TitleFile = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #006838;
`;

const Text = styled.div`
    font-size: 20px;
    line-height: 24px;
    color: #7d7d7d;

    span {
        border-radius: 5px;
        padding: 5px 13.5px;
        background: #20836d;
        border-radius: 5px;
        color: #fff;
    }
`;

const FileLoaded = styled.div`
    color: #006838;
    width: 100%;

    span {
        position: relative;
        button {
            position: absolute;
            top: -5px;
            right: -20px;
            background: transparent;
            border: none;
            color: #006838;
            cursor: pointer;
            font-weight: 500;
            font-size: 16px;
        }
    }
`;

const GreenButton = styled(DefaultButton)`
    background: #20836d;
    color: #fff;
`;

const DocumentForm = () => {
    const [fileMain, setFileMain] = useState<File | null>(null);
    const [fileBack, setFileBack] = useState<File | null>(null);

    const onChangeFile = (event: File | null, type: 'MAIN' | 'BACK') => {
        // 10mb > bite = 10 * 1024 * 1024 = 10485760
        if (type === 'MAIN' && event && event.size <= 10485760) {
            setFileMain(event);
        }

        if (type === 'BACK' && event && event.size <= 10485760) {
            setFileBack(event);
        }
    };

    return (
        <Box
            sx={{
                padding: '30px',
            }}
        >
            <Stack spacing="120px">
                <Stack spacing="30px">
                    <Stack spacing="60px">
                        <Stack
                            spacing="23px"
                            sx={{
                                maxWidth: '1200px',
                            }}
                        >
                            <Title>Для прохождения идентификации, пожалуйста, загрузите паспорт.</Title>
                            <Typography variant="body1">
                                На фотографии (скане) паспорта обязательно должны присутствовать первый разворот (1-2
                                страницы паспорта) и регистрация (3-4 страницы паспорта). Фотография (скан) паспорта
                                должна быть цветной, в хорошем качестве и легко читаема.
                            </Typography>
                        </Stack>
                    </Stack>
                    <FileWraper direction="row" spacing="30px">
                        {fileMain ? (
                            <FileLoaded>
                                <span>
                                    {fileMain.name}
                                    <button onClick={() => setFileMain(null)}>x</button>
                                </span>
                            </FileLoaded>
                        ) : (
                            <FileUploader
                                multiple={false}
                                handleChange={(file: File) => onChangeFile(file, 'MAIN')}
                                name="MAIN"
                            >
                                <FileInput alignItems="center" spacing="30px">
                                    <svg
                                        width="84"
                                        height="84"
                                        viewBox="0 0 84 84"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="42" cy="42" r="42" fill="#006838" fillOpacity="0.15" />
                                        <path
                                            d="M56.185 30.75H50.8175L50.1925 28.875C49.8913 27.9646 49.3104 27.1724 48.5328 26.6113C47.7551 26.0502 46.8202 25.7488 45.8613 25.75H38.1388C37.18 25.7493 36.2455 26.0509 35.4681 26.6119C34.6908 27.173 34.1101 27.9649 33.8087 28.875L33.1825 30.75H27.815C26.6047 30.7513 25.4443 31.2327 24.5885 32.0885C23.7327 32.9443 23.2513 34.1047 23.25 35.315V53.69C23.2526 54.8994 23.7346 56.0585 24.5903 56.9133C25.446 57.768 26.6056 58.2487 27.815 58.25H56.19C57.3994 58.2474 58.5585 57.7654 59.4132 56.9097C60.268 56.054 60.7487 54.8944 60.75 53.685V35.31C60.7474 34.1006 60.2654 32.9415 59.4097 32.0868C58.554 31.232 57.3944 30.7513 56.185 30.75ZM58.25 53.685C58.2493 54.2325 58.0316 54.7573 57.6444 55.1444C57.2573 55.5316 56.7325 55.7493 56.185 55.75H27.815C27.2675 55.7493 26.7427 55.5316 26.3556 55.1444C25.9684 54.7573 25.7507 54.2325 25.75 53.685V35.31C25.752 34.7634 25.9703 34.2398 26.3573 33.8538C26.7443 33.4677 27.2684 33.2507 27.815 33.25H34.0837C34.346 33.2498 34.6015 33.1671 34.8142 33.0137C35.0269 32.8602 35.1859 32.6438 35.2687 32.395L36.18 29.6613C36.3168 29.2501 36.5797 28.8924 36.9313 28.6391C37.2829 28.3858 37.7054 28.2496 38.1388 28.25H45.8613C46.2948 28.2495 46.7175 28.3858 47.0691 28.6394C47.4208 28.893 47.6835 29.251 47.82 29.6625L48.7313 32.395C48.8141 32.6438 48.9731 32.8602 49.1858 33.0137C49.3985 33.1671 49.654 33.2498 49.9163 33.25H56.185C56.7325 33.2507 57.2573 33.4684 57.6444 33.8556C58.0316 34.2427 58.2493 34.7675 58.25 35.315V53.685Z"
                                            fill="#006838"
                                        />
                                        <path
                                            d="M42 34.5C40.1458 34.5 38.3332 35.0498 36.7915 36.08C35.2498 37.1101 34.0482 38.5743 33.3386 40.2873C32.6291 42.0004 32.4434 43.8854 32.8051 45.704C33.1669 47.5225 34.0598 49.193 35.3709 50.5041C36.682 51.8152 38.3525 52.7081 40.171 53.0699C41.9896 53.4316 43.8746 53.2459 45.5877 52.5364C47.3007 51.8268 48.7649 50.6252 49.795 49.0835C50.8252 47.5418 51.375 45.7292 51.375 43.875C51.3724 41.3894 50.3838 39.0064 48.6262 37.2488C46.8686 35.4912 44.4856 34.5026 42 34.5ZM42 50.75C40.6403 50.75 39.311 50.3468 38.1805 49.5914C37.0499 48.8359 36.1687 47.7622 35.6483 46.5059C35.128 45.2497 34.9918 43.8674 35.2571 42.5338C35.5224 41.2001 36.1772 39.9751 37.1386 39.0136C38.1001 38.0522 39.3251 37.3974 40.6588 37.1321C41.9924 36.8668 43.3747 37.003 44.631 37.5233C45.8872 38.0437 46.9609 38.9249 47.7164 40.0555C48.4718 41.186 48.875 42.5153 48.875 43.875C48.873 45.6978 48.1481 47.4453 46.8592 48.7342C45.5703 50.023 43.8228 50.748 42 50.75Z"
                                            fill="#006838"
                                        />
                                        <path
                                            d="M54.5 38.25C55.1904 38.25 55.75 37.6904 55.75 37C55.75 36.3096 55.1904 35.75 54.5 35.75C53.8096 35.75 53.25 36.3096 53.25 37C53.25 37.6904 53.8096 38.25 54.5 38.25Z"
                                            fill="#006838"
                                        />
                                    </svg>
                                    <TitleFile>Перетащите разворот с фотографией сюда</TitleFile>
                                    <Stack spacing="90px">
                                        <Text>
                                            Или <span>Выберите файл</span> на вашем устройстве.
                                        </Text>
                                        <Text>Максимальный объем файла - 10MB</Text>
                                    </Stack>
                                </FileInput>
                            </FileUploader>
                        )}
                        {fileBack ? (
                            <FileLoaded>
                                <span>
                                    {fileBack.name}
                                    <button onClick={() => setFileBack(null)}>x</button>
                                </span>
                            </FileLoaded>
                        ) : (
                            <FileUploader
                                multiple={false}
                                handleChange={(file: File) => onChangeFile(file, 'BACK')}
                                name="BACK"
                            >
                                <FileInput alignItems="center" spacing="30px">
                                    <svg
                                        width="84"
                                        height="84"
                                        viewBox="0 0 84 84"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="42" cy="42" r="42" fill="#006838" fillOpacity="0.15" />
                                        <path
                                            d="M56.185 30.75H50.8175L50.1925 28.875C49.8913 27.9646 49.3104 27.1724 48.5328 26.6113C47.7551 26.0502 46.8202 25.7488 45.8613 25.75H38.1388C37.18 25.7493 36.2455 26.0509 35.4681 26.6119C34.6908 27.173 34.1101 27.9649 33.8087 28.875L33.1825 30.75H27.815C26.6047 30.7513 25.4443 31.2327 24.5885 32.0885C23.7327 32.9443 23.2513 34.1047 23.25 35.315V53.69C23.2526 54.8994 23.7346 56.0585 24.5903 56.9133C25.446 57.768 26.6056 58.2487 27.815 58.25H56.19C57.3994 58.2474 58.5585 57.7654 59.4132 56.9097C60.268 56.054 60.7487 54.8944 60.75 53.685V35.31C60.7474 34.1006 60.2654 32.9415 59.4097 32.0868C58.554 31.232 57.3944 30.7513 56.185 30.75ZM58.25 53.685C58.2493 54.2325 58.0316 54.7573 57.6444 55.1444C57.2573 55.5316 56.7325 55.7493 56.185 55.75H27.815C27.2675 55.7493 26.7427 55.5316 26.3556 55.1444C25.9684 54.7573 25.7507 54.2325 25.75 53.685V35.31C25.752 34.7634 25.9703 34.2398 26.3573 33.8538C26.7443 33.4677 27.2684 33.2507 27.815 33.25H34.0837C34.346 33.2498 34.6015 33.1671 34.8142 33.0137C35.0269 32.8602 35.1859 32.6438 35.2687 32.395L36.18 29.6613C36.3168 29.2501 36.5797 28.8924 36.9313 28.6391C37.2829 28.3858 37.7054 28.2496 38.1388 28.25H45.8613C46.2948 28.2495 46.7175 28.3858 47.0691 28.6394C47.4208 28.893 47.6835 29.251 47.82 29.6625L48.7313 32.395C48.8141 32.6438 48.9731 32.8602 49.1858 33.0137C49.3985 33.1671 49.654 33.2498 49.9163 33.25H56.185C56.7325 33.2507 57.2573 33.4684 57.6444 33.8556C58.0316 34.2427 58.2493 34.7675 58.25 35.315V53.685Z"
                                            fill="#006838"
                                        />
                                        <path
                                            d="M42 34.5C40.1458 34.5 38.3332 35.0498 36.7915 36.08C35.2498 37.1101 34.0482 38.5743 33.3386 40.2873C32.6291 42.0004 32.4434 43.8854 32.8051 45.704C33.1669 47.5225 34.0598 49.193 35.3709 50.5041C36.682 51.8152 38.3525 52.7081 40.171 53.0699C41.9896 53.4316 43.8746 53.2459 45.5877 52.5364C47.3007 51.8268 48.7649 50.6252 49.795 49.0835C50.8252 47.5418 51.375 45.7292 51.375 43.875C51.3724 41.3894 50.3838 39.0064 48.6262 37.2488C46.8686 35.4912 44.4856 34.5026 42 34.5ZM42 50.75C40.6403 50.75 39.311 50.3468 38.1805 49.5914C37.0499 48.8359 36.1687 47.7622 35.6483 46.5059C35.128 45.2497 34.9918 43.8674 35.2571 42.5338C35.5224 41.2001 36.1772 39.9751 37.1386 39.0136C38.1001 38.0522 39.3251 37.3974 40.6588 37.1321C41.9924 36.8668 43.3747 37.003 44.631 37.5233C45.8872 38.0437 46.9609 38.9249 47.7164 40.0555C48.4718 41.186 48.875 42.5153 48.875 43.875C48.873 45.6978 48.1481 47.4453 46.8592 48.7342C45.5703 50.023 43.8228 50.748 42 50.75Z"
                                            fill="#006838"
                                        />
                                        <path
                                            d="M54.5 38.25C55.1904 38.25 55.75 37.6904 55.75 37C55.75 36.3096 55.1904 35.75 54.5 35.75C53.8096 35.75 53.25 36.3096 53.25 37C53.25 37.6904 53.8096 38.25 54.5 38.25Z"
                                            fill="#006838"
                                        />
                                    </svg>
                                    <TitleFile>Перетащите разворот с фотографией сюда</TitleFile>
                                    <Stack spacing="90px">
                                        <Text>
                                            Или <span>Выберите файл</span> на вашем устройстве.
                                        </Text>
                                        <Text>Максимальный объем файла - 10MB</Text>
                                    </Stack>
                                </FileInput>
                            </FileUploader>
                        )}
                    </FileWraper>

                    {fileMain && fileBack && (
                        <Button
                            sx={{
                                maxWidth: '600px',
                            }}
                            variant="dark-green"
                        >
                            Отправить на верификацию
                        </Button>
                    )}
                </Stack>
                <Stack direction="row" spacing="110px" alignItems="center">
                    <Stack
                        spacing="23px"
                        sx={{
                            maxWidth: '868px',
                        }}
                    >
                        <Title>Договор о сотрудничестве</Title>
                        <Typography variant="body1">
                            Данный договор заключается между инвестором и компанией, скачайте и заполните его, а затем
                            загрузите на платформу.
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing="30px">
                        <GreenButton>
                            <svg
                                width="25"
                                height="26"
                                viewBox="0 0 25 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
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
                            Скачать
                        </GreenButton>
                        <OutlineBtn text="Загрузить Подписанный" />
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

export default DocumentForm;