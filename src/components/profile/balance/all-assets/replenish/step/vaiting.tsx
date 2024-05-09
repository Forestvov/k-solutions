import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import TitleStep from './title-step';

interface Props {
    onClose: VoidFunction;
    transactionType?: 'In' | 'Out';
}

const SvgBox = styled.div`
    text-align: center;
    animation-name: rotateAnim;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;

    @keyframes rotateAnim {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Vaiting = ({ onClose, transactionType }: Props) => {
    const { t } = useTranslation('personal');

    return (
        <Stack
            spacing="60px"
            sx={{
                margin: '0 auto',
                maxWidth: '586px',
            }}
        >
            <TitleStep>
                {transactionType === 'Out'
                    ? t('Проводится вывод средств, пожалуйста подождите')
                    : t('Проводится проверка оплаты, пожалуйста подождите')}
            </TitleStep>
            <SvgBox>
                <svg width="132" height="131" viewBox="0 0 132 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_345_16626)">
                        <path
                            d="M26.3311 113.076C34.0465 113.076 40.301 106.822 40.301 99.1065C40.301 91.3912 34.0465 85.1367 26.3311 85.1367C18.6158 85.1367 12.3613 91.3912 12.3613 99.1065C12.3613 106.822 18.6158 113.076 26.3311 113.076Z"
                            fill="#006838"
                            fillOpacity="0.7"
                        />
                        <path
                            d="M116.213 100.688C122.909 100.688 128.337 95.2595 128.337 88.5632C128.337 81.8669 122.909 76.4385 116.213 76.4385C109.516 76.4385 104.088 81.8669 104.088 88.5632C104.088 95.2595 109.516 100.688 116.213 100.688Z"
                            fill="#006838"
                            fillOpacity="0.4"
                        />
                        <path
                            d="M105.141 39.5371C110.673 39.5371 115.157 35.0527 115.157 29.521C115.157 23.9892 110.673 19.5049 105.141 19.5049C99.6094 19.5049 95.125 23.9892 95.125 29.521C95.125 35.0527 99.6094 39.5371 105.141 39.5371Z"
                            fill="#006838"
                            fillOpacity="0.2"
                        />
                        <path
                            d="M15.3251 78.9764C23.5128 78.9764 30.1503 72.5007 30.1503 64.5126C30.1503 56.5245 23.5128 50.0488 15.3251 50.0488C7.13744 50.0488 0.5 56.5245 0.5 64.5126C0.5 72.5007 7.13744 78.9764 15.3251 78.9764Z"
                            fill="#006838"
                            fillOpacity="0.8"
                        />
                        <path
                            d="M57.913 131C65.3564 131 71.3904 125.12 71.3904 117.867C71.3904 110.614 65.3564 104.734 57.913 104.734C50.4696 104.734 44.4355 110.614 44.4355 117.867C44.4355 125.12 50.4696 131 57.913 131Z"
                            fill="#006838"
                            fillOpacity="0.6"
                        />
                        <path
                            d="M92.5496 125.246C99.6207 125.246 105.353 119.664 105.353 112.779C105.353 105.894 99.6207 100.312 92.5496 100.312C85.4784 100.312 79.7461 105.894 79.7461 112.779C79.7461 119.664 85.4784 125.246 92.5496 125.246Z"
                            fill="#006838"
                            fillOpacity="0.5"
                        />
                        <path
                            d="M31.3641 45.3865C39.9239 45.3865 46.8629 38.6131 46.8629 30.2577C46.8629 21.9023 39.9239 15.1289 31.3641 15.1289C22.8043 15.1289 15.8652 21.9023 15.8652 30.2577C15.8652 38.6131 22.8043 45.3865 31.3641 45.3865Z"
                            fill="#006838"
                        />
                        <path
                            d="M120.044 68.3031C126.371 68.3031 131.499 63.2693 131.499 57.0597C131.499 50.8502 126.371 45.8164 120.044 45.8164C113.717 45.8164 108.588 50.8502 108.588 57.0597C108.588 63.2693 113.717 68.3031 120.044 68.3031Z"
                            fill="#006838"
                            fillOpacity="0.3"
                        />
                        <path
                            d="M69.8225 32.6841C78.848 32.6841 86.1646 25.3675 86.1646 16.3421C86.1646 7.31659 78.848 0 69.8225 0C60.7971 0 53.4805 7.31659 53.4805 16.3421C53.4805 25.3675 60.7971 32.6841 69.8225 32.6841Z"
                            fill="#004D2A"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_345_16626">
                            <rect width="131" height="131" fill="white" transform="translate(0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            </SvgBox>
            <Button
                type="button"
                onClick={onClose}
                variant="black"
                sx={{
                    padding: '20px',
                }}
            >
                {t('Закрыть')}
            </Button>
        </Stack>
    );
};

export default Vaiting;
