import type { FC } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { LargestCommandCard } from 'components/about-platform/largest-command/largest-command-card';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { avatars } from 'components/about-platform/largest-command/data';
import { CommandImage } from 'components/about-platform/largest-command/image';
import { useState } from 'react';

const Inner = styled(Container)`
    position: relative;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 70px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
    margin-top: 70px;

    @media (max-width: 770px) {
        margin-top: 40px;
        gap: 15px;
    }
`;

const TabButton = styled(Button)<{ active: boolean }>`
    padding: 13px 20px;
    border-radius: 30px;
    color: ${({ active }) => (active ? '#fff' : '#1F7A66')};
    border: 1px solid #1f7a66;
    background: ${({ active }) => (active ? '#006838' : 'transparent')};

    display: flex;
    gap: 15px;

    @media (max-width: 770px) {
        width: 100%;
    }

    :active {
        background-color: #006838;
    }

    :hover {
        background: #006838;
        color: #fff;
    }
`;

const Title = styled.h2`
    font-size: 3rem;
    color: #373737;
    line-height: 60px;
    user-select: none;
    font-weight: 600;
    margin: 0;

    @media (max-width: 770px) {
        font-size: 2rem;
    }
`;

const CommandSection: FC = () => {
    const { t } = useTranslation('about-platform');

    const [activeButton, setActiveButton] = useState<number | null>(0);
    const [displayedAvatars, setDisplayedAvatars] = useState(avatars);

    const handleButtonClick = (startIndex: number, endIndex: number, buttonIndex: number) => {
        setDisplayedAvatars(avatars.slice(startIndex, endIndex));
        setActiveButton(buttonIndex);
    };

    const cards = [
        {
            id: '1',
            title: t('largestCommandCardTitle1'),
            text: t('largestCommandCardText1'),
            label: '≥1300',
        },
        {
            id: '2',
            title: t('largestCommandCardTitle2'),
            text: t('largestCommandCardText2'),
            label: '≈$450 k',
        },
        {
            id: '3',
            title: t('largestCommandCardTitle3'),
            text: t('largestCommandCardText3'),
            label: '28 / 30',
        },
        {
            id: '4',
            title: t('largestCommandCardTitle4'),
            text: t('largestCommandCardText4'),
            label: '≥$1 Bln.',
        },
    ];

    return (
        <Box
            sx={{
                background: 'transparent',
                paddingTop: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                paddingBottom: { lg: '140px', xl: '120px', sm: '120px', xs: '80px' },
                overflow: 'hidden',
                marginBottom: { xs: '50px', sm: '10px', md: '10px' },
            }}
        >
            <Inner fixed>
                <Title>{t('ourTeamTitle')}</Title>
                <ButtonsContainer>
                    <TabButton active={activeButton === 0} onClick={() => handleButtonClick(0, avatars.length, 0)}>
                        {t('ourTeamButton')}
                    </TabButton>
                    <TabButton active={activeButton === 1} onClick={() => handleButtonClick(0, 5, 1)}>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.5287 6.07893C12.0656 6.07785 11.6593 5.78097 11.5331 5.35143L11.5156 5.29209C11.5135 5.28484 11.5113 5.27761 11.509 5.2704L10.0128 0.585524C9.81746 -0.026161 8.92767 -0.0481746 8.70025 0.553045L6.9281 5.238C6.91992 5.25963 6.91252 5.28154 6.90591 5.30366L6.89486 5.3406C6.76664 5.76953 6.35897 6.06451 5.89589 6.06342L5.85321 6.06332L0.964785 6.05189C0.300697 6.05034 0.0157881 6.86372 0.544851 7.25072L4.6405 10.2466C4.65667 10.2585 4.6732 10.2699 4.69008 10.2807L4.74191 10.3143C5.11661 10.5563 5.28613 11.004 5.16124 11.4218L5.13585 11.5068C5.13415 11.5125 5.13238 11.5182 5.13057 11.5239L3.62487 16.2431C3.42865 16.8581 4.16629 17.354 4.69709 16.964L8.52822 14.149C8.53952 14.1408 8.55064 14.1322 8.56158 14.1234L8.58843 14.102C8.97379 13.7939 9.53254 13.7952 9.91642 14.1051L9.94317 14.1266C9.95405 14.1355 9.96513 14.1441 9.97641 14.1524L13.7943 16.9853C14.3233 17.3778 15.0632 16.8853 14.8699 16.2694L13.3863 11.5432C13.3845 11.5375 13.3827 11.5318 13.3811 11.5261L13.3561 11.441C13.2331 11.0226 13.4048 10.5757 13.7806 10.3354L13.8326 10.3021C13.8495 10.2914 13.8661 10.28 13.8823 10.2682L17.992 7.29152C18.5228 6.90699 18.2417 6.09229 17.5776 6.09074L12.5713 6.07903L12.5287 6.07893Z"
                                fill="#20836D"
                            />
                        </svg>
                        {t('ourTeamButton1')}
                    </TabButton>
                    <TabButton active={activeButton === 2} onClick={() => handleButtonClick(6, 9, 2)}>
                        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.8952 13.1612L2.66985 13.135C2.4641 13.1345 2.29751 12.9705 2.29799 12.7689C2.29846 12.5673 2.46581 12.4045 2.67156 12.405L13.8969 12.4312C14.1027 12.4317 14.2692 12.5957 14.2688 12.7969C14.2683 12.9981 14.101 13.1617 13.8952 13.1612ZM13.8907 15.108L2.6653 15.0818C2.45955 15.0813 2.29296 14.9173 2.29343 14.7157C2.29391 14.5141 2.46126 14.3509 2.66701 14.3514L13.8924 14.3776C14.0982 14.3781 14.2647 14.5421 14.2642 14.7437C14.2637 14.9453 14.0965 15.1085 13.8907 15.108ZM13.8861 17.0548L2.66075 17.0286C2.455 17.0281 2.28841 16.8641 2.28888 16.6625C2.28935 16.4609 2.45671 16.2977 2.66245 16.2982L13.8878 16.3244C14.0936 16.3249 14.2601 16.4889 14.2597 16.6905C14.2592 16.8921 14.0919 17.0553 13.8861 17.0548ZM8.89978 18.99L2.65619 18.9754C2.45045 18.9749 2.28386 18.8109 2.28433 18.6093C2.2848 18.4077 2.45215 18.2445 2.6579 18.245L8.90109 18.2596C9.10689 18.2601 9.273 18.424 9.27253 18.6256C9.27206 18.8272 9.10518 18.9905 8.89978 18.99ZM5.62135 5.66667C5.62471 4.23067 6.81582 3.06905 8.2814 3.07248C9.74699 3.07591 10.9327 4.24308 10.9293 5.67908C10.9276 6.41628 10.6129 7.08074 10.1092 7.55277L11.5002 10.1508L10.3039 9.85563L9.87179 10.9878L8.41664 8.26961C8.36804 8.2719 8.31863 8.27338 8.26963 8.27327C8.22065 8.27315 8.17127 8.27144 8.12269 8.26892L6.65484 10.9803L6.22802 9.8461L5.03038 10.1357L6.43344 7.54417C5.9316 7.0698 5.61963 6.40387 5.62135 5.66667ZM14.9072 0.985168L1.66507 0.954204C1.17967 0.953069 0.785231 1.33775 0.784119 1.81335L0.741381 20.0909C0.740269 20.5665 1.13291 20.953 1.6183 20.9541L14.8604 20.9851C15.3458 20.9862 15.7402 20.6016 15.7413 20.126L15.7841 1.84842C15.7852 1.37282 15.3926 0.986303 14.9072 0.985168Z"
                                fill="#20836D"
                            />
                        </svg>
                        {t('ourTeamButton2')}
                    </TabButton>
                    <TabButton active={activeButton === 3} onClick={() => handleButtonClick(10, 16, 3)}>
                        <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.28514 0.881602C5.97892 0.878548 4.86573 1.71076 4.45118 2.87498L4.28047 2.87458C3.1759 2.872 2.27838 3.76533 2.2758 4.8699L1.1758 4.86733C0.678742 4.86617 0.274861 5.26816 0.273699 5.76522L0.243067 18.8652C0.241776 19.4175 0.688448 19.8662 1.24073 19.8675L13.2407 19.8956C13.793 19.8969 14.2417 19.4502 14.243 18.8979L14.2737 5.79796C14.2748 5.3009 13.8729 4.89702 13.3758 4.89585L12.2758 4.89328C12.2784 3.78872 11.385 2.89119 10.2805 2.88861L10.1098 2.88821C9.70068 1.72206 8.59133 0.884657 7.28514 0.881602ZM9.27578 4.88627L9.27812 3.88627L8.27812 3.88393C8.27941 3.33165 7.83276 2.88289 7.28046 2.8816C6.72818 2.88031 6.27942 3.32698 6.27812 3.87926L5.27813 3.87692L5.27579 4.87691L9.27578 4.88627ZM3.86132 11.0736L2.65758 12.6708L7.49475 16.3164L12.0972 9.44759L10.4357 8.3343L7.01011 13.4468L3.86132 11.0736Z"
                                fill="#20836D"
                            />
                        </svg>
                        {t('ourTeamButton3')}
                    </TabButton>
                    <TabButton active={activeButton === 4} onClick={() => handleButtonClick(17, 21, 4)}>
                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.9159 15.9822C1.51149 15.9822 1.16516 15.8354 0.876929 15.5419C0.589188 15.2479 0.445312 14.8947 0.445312 14.4822V3.98218H1.9159V14.4822H10.0041V15.9822H1.9159ZM4.85708 12.9822C4.45266 12.9822 4.10659 12.8354 3.81884 12.5419C3.5306 12.2479 3.38649 11.8947 3.38649 11.4822V2.48218C3.38649 2.06968 3.5306 1.71643 3.81884 1.42243C4.10659 1.12893 4.45266 0.982178 4.85708 0.982178H11.4747C11.8791 0.982178 12.2255 1.12893 12.5137 1.42243C12.8015 1.71643 12.9453 2.06968 12.9453 2.48218V11.4822C12.9453 11.8947 12.8015 12.2479 12.5137 12.5419C12.2255 12.8354 11.8791 12.9822 11.4747 12.9822H4.85708Z"
                                fill="#20836D"
                            />
                        </svg>
                        {t('ourTeamButton9')}
                    </TabButton>
                    <TabButton active={activeButton === 5} onClick={() => handleButtonClick(22, 24, 5)}>
                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.08552 14.7463C7.16305 15.1192 6.92416 15.4647 6.55505 15.5209L4.77253 15.7869C4.40342 15.8431 4.04361 15.5839 3.96608 15.211L3.0234 10.5965C2.94587 10.2236 3.18475 9.87806 3.55386 9.82186L5.33476 9.55746C5.70387 9.50126 6.06369 9.76046 6.14121 10.1335L7.08218 14.7462L7.08552 14.7463Z"
                                fill="#20836D"
                            />
                            <path
                                d="M17.8628 6.68681C17.3453 6.16927 16.5314 6.14752 16.0444 6.63449C15.5574 7.12147 15.5792 7.93534 16.0967 8.45294C16.6126 8.96874 17.4282 8.99214 17.9151 8.50524C18.4021 8.01824 18.3786 7.20263 17.8628 6.68681Z"
                                fill="#20836D"
                            />
                            <path
                                d="M7.26562 3.67143L3.34135 3.55853C1.83382 3.51516 0.647232 4.70174 0.690605 6.20928L0.744556 8.08452C0.787929 9.59202 2.04482 10.8489 3.55235 10.8923L7.47328 11.0051L7.26562 3.67143Z"
                                fill="#20836D"
                            />
                            <path
                                d="M15.1588 14.4677C14.8179 14.4579 14.5313 14.1323 14.52 13.7412L14.1585 1.17618C14.1473 0.785094 14.4156 0.475524 14.7565 0.485334L15.3749 0.503124C15.7159 0.512934 16.0025 0.838474 16.0137 1.22956L16.3752 13.7946C16.3865 14.1857 16.1182 14.4953 15.7772 14.4855L15.1588 14.4677Z"
                                fill="#20836D"
                            />
                            <path
                                d="M7.77832 3.68488L7.90561 9.03475L13.8753 9.24015L13.6778 0.972168C12.6683 2.36523 11.3181 3.34745 9.76748 3.66482C9.09085 3.80352 8.42345 3.80393 7.77832 3.68488Z"
                                fill="#20836D"
                            />
                            <path
                                d="M13.993 14.0853L13.8359 7.49868L7.86621 7.29321L7.9545 10.9635C8.59497 10.8886 9.26349 10.935 9.94792 11.1206C11.5164 11.5453 12.9162 12.6221 13.9944 14.087L13.993 14.0853Z"
                                fill="#20836D"
                            />
                            <path
                                d="M7.36866 7.29953L0.716797 7.10815L0.744879 8.08423C0.788251 9.59173 2.04513 10.8486 3.55267 10.892L7.47359 11.0048L7.36695 7.29781L7.36866 7.29953Z"
                                fill="#20836D"
                            />
                            <path
                                d="M16.3747 13.7948L16.1911 7.47207L14.3359 7.4187L14.5179 13.743C14.5291 14.1341 14.8157 14.4597 15.1567 14.4695L15.7751 14.4873C16.116 14.4971 16.3843 14.1875 16.3731 13.7964L16.3747 13.7948Z"
                                fill="#20836D"
                            />
                            <path
                                d="M4.47484 11.4931C4.42284 11.2528 4.19102 11.0892 3.9516 11.1257C3.71389 11.164 3.56171 11.3884 3.61371 11.6287L4.34366 15.0597C4.39566 15.3 4.6292 15.4653 4.8669 15.4271C5.1046 15.3888 5.25517 15.1661 5.20479 14.9241L4.47484 11.4931Z"
                                fill="#20836D"
                            />
                        </svg>
                        {t('ourTeamButton4')}
                    </TabButton>
                    <TabButton active={activeButton === 6} onClick={() => handleButtonClick(25, 31, 6)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.02544 0.834229C8.76528 0.834229 8.55437 1.04514 8.55437 1.3053V3.08191C7.82029 3.26335 7.1175 3.55373 6.46945 3.94337L5.21743 2.68813C5.12913 2.5996 5.00925 2.54981 4.88421 2.54973C4.75917 2.54965 4.63923 2.59928 4.55082 2.6877L2.5566 4.68192C2.46818 4.77033 2.41855 4.89028 2.41863 5.01532C2.41871 5.14036 2.4685 5.26024 2.55702 5.34854L3.81226 6.60055C3.42262 7.2486 3.13225 7.95139 2.9508 8.68547H1.1742C0.914032 8.68547 0.703125 8.89638 0.703125 9.15654V11.5119C0.703125 11.7721 0.914032 11.983 1.1742 11.983H2.9508C3.13225 12.717 3.42262 13.4198 3.81226 14.0679L2.55702 15.3199C2.4685 15.4082 2.41871 15.5281 2.41863 15.6531C2.41855 15.7782 2.46818 15.8981 2.5566 15.9865L4.55082 17.9807C4.63923 18.0691 4.75917 18.1188 4.88421 18.1187C5.00925 18.1186 5.12913 18.0688 5.21743 17.9803L6.46945 16.7251C7.1175 17.1147 7.82029 17.4051 8.55437 17.5865V19.3631C8.55437 19.6233 8.76528 19.8342 9.02544 19.8342H11.3808C11.641 19.8342 11.8519 19.6233 11.8519 19.3631V17.5865C12.5859 17.4051 13.2887 17.1147 13.9368 16.7251L15.1888 17.9803C15.2771 18.0688 15.397 18.1186 15.522 18.1187C15.6471 18.1188 15.767 18.0691 15.8554 17.9807L17.8496 15.9865C17.938 15.8981 17.9877 15.7782 17.9876 15.6531C17.9875 15.5281 17.9377 15.4082 17.8492 15.3199L16.594 14.0679C16.9836 13.4198 17.274 12.717 17.4554 11.983H19.232C19.4922 11.983 19.7031 11.7721 19.7031 11.5119V9.15654C19.7031 8.89638 19.4922 8.68547 19.232 8.68547H17.4554C17.274 7.95139 16.9836 7.2486 16.594 6.60055L17.8492 5.34854C17.9377 5.26024 17.9875 5.14036 17.9876 5.01532C17.9877 4.89028 17.938 4.77033 17.8496 4.68192L15.8554 2.6877C15.767 2.59928 15.6471 2.54965 15.522 2.54973C15.397 2.54981 15.2771 2.5996 15.1888 2.68813L13.9368 3.94337C13.2887 3.55373 12.5859 3.26335 11.8519 3.08191V1.3053C11.8519 1.04514 11.641 0.834229 11.3808 0.834229H9.02544ZM6.9056 10.3342C6.9056 8.51306 8.38196 7.03671 10.2031 7.03671C12.0243 7.03671 13.5006 8.51306 13.5006 10.3342C13.5006 12.1554 12.0243 13.6317 10.2031 13.6317C8.38196 13.6317 6.9056 12.1554 6.9056 10.3342Z"
                                fill="#20836D"
                            />
                        </svg>
                        {t('ourTeamButton5')}
                    </TabButton>
                    <TabButton active={activeButton === 7} onClick={() => handleButtonClick(32, 37, 7)}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10.249" cy="10.1809" r="10" fill="#20836D" />
                            <path
                                d="M9.94587 15.1809V5.18091H10.5915V15.1809H9.94587ZM11.9656 8.28247C11.9236 7.91268 11.7503 7.62622 11.4459 7.4231C11.1414 7.21737 10.7582 7.1145 10.2963 7.1145C9.96556 7.1145 9.67947 7.16659 9.438 7.27075C9.19653 7.37231 9.00887 7.51294 8.87501 7.69263C8.74377 7.86971 8.67816 8.07153 8.67816 8.2981C8.67816 8.4882 8.72278 8.65226 8.81202 8.79028C8.90388 8.9283 9.0233 9.04419 9.17028 9.13794C9.31989 9.22909 9.47999 9.30591 9.6506 9.36841C9.8212 9.4283 9.98524 9.47778 10.1427 9.51685L10.9301 9.71997C11.1873 9.78247 11.4511 9.86711 11.7215 9.97388C11.9918 10.0806 12.2425 10.2213 12.4734 10.3958C12.7044 10.5702 12.8908 10.7864 13.0325 11.0442C13.1768 11.302 13.249 11.6106 13.249 11.97C13.249 12.4231 13.1309 12.8254 12.8947 13.177C12.6611 13.5286 12.3212 13.8059 11.875 14.009C11.4314 14.2122 10.8947 14.3137 10.2648 14.3137C9.6611 14.3137 9.13879 14.2187 8.69784 14.0286C8.2569 13.8385 7.91175 13.5689 7.66241 13.22C7.41307 12.8684 7.27527 12.4517 7.24902 11.97H8.4695C8.49312 12.259 8.58761 12.4999 8.75296 12.6926C8.92094 12.8827 9.13485 13.0247 9.39469 13.1184C9.65716 13.2096 9.94456 13.2551 10.2569 13.2551C10.6007 13.2551 10.9065 13.2017 11.1742 13.095C11.4446 12.9856 11.6572 12.8346 11.812 12.6418C11.9669 12.4465 12.0443 12.2187 12.0443 11.9583C12.0443 11.7213 11.9761 11.5273 11.8396 11.3762C11.7057 11.2252 11.5233 11.1002 11.2923 11.0012C11.064 10.9023 10.8055 10.815 10.5167 10.7395L9.56398 10.4817C8.91831 10.3072 8.4065 10.0507 8.02855 9.71216C7.65322 9.37362 7.46556 8.9257 7.46556 8.36841C7.46556 7.90747 7.59154 7.50513 7.84351 7.16138C8.09548 6.81763 8.43669 6.5507 8.86713 6.3606C9.29758 6.16789 9.78314 6.07153 10.3238 6.07153C10.8698 6.07153 11.3514 6.16659 11.7687 6.35669C12.1887 6.54679 12.5194 6.80851 12.7608 7.14185C13.0023 7.47257 13.1283 7.85278 13.1388 8.28247H11.9656Z"
                                fill="white"
                            />
                        </svg>
                        {t('ourTeamButton6')}
                    </TabButton>
                    <TabButton active={activeButton === 8} onClick={() => handleButtonClick(38, 40, 8)}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.86 5.99728C10.86 4.79598 9.88659 3.82447 8.68528 3.82447C7.48397 3.82447 6.51247 4.79598 6.51247 5.99728C6.51247 7.19859 7.48584 8.1701 8.68528 8.1701C9.88472 8.1701 10.86 7.19672 10.86 5.99728ZM20.3509 17.1117L17.3597 14.1206L14.5274 16.951L17.5204 19.944C17.9109 20.3345 18.4247 20.5307 18.9366 20.5307C19.4485 20.5307 19.9604 20.3345 20.3509 19.944C21.1337 19.1612 21.1337 17.8945 20.3509 17.1117ZM12.4536 11.2845C12.3415 11.4228 12.2219 11.5573 12.0949 11.6862C11.2915 12.4896 10.2584 12.9791 9.14301 13.0968L9.43073 12.809C9.53162 12.7082 9.57272 12.5195 9.52041 12.3849L8.78056 10.4812C8.75441 10.4139 8.72078 10.3803 8.68715 10.3803C8.65352 10.3803 8.61989 10.4139 8.59374 10.4812L7.85389 12.3849C7.80158 12.5176 7.84269 12.7082 7.9417 12.809L8.24437 13.1098C7.06735 13.0239 5.97253 12.5269 5.1318 11.6843C5.04399 11.5965 4.96366 11.5068 4.88332 11.4153C5.28874 9.80298 6.83568 8.60354 8.68715 8.60354C10.5386 8.60354 11.9996 9.73946 12.4555 11.2827L12.4536 11.2845ZM9.356 9.27986H8.0183C7.87631 9.27986 7.84269 9.36207 7.9417 9.46108L8.50406 10.0216C8.5545 10.072 8.61989 10.0963 8.68715 10.0963C8.75441 10.0963 8.8198 10.072 8.86837 10.0216L9.43073 9.46108C9.53162 9.3602 9.49799 9.27986 9.356 9.27986ZM13.4756 15.8973L12.6236 15.0454C12.562 14.9837 12.5059 14.9183 12.4517 14.8473C11.2673 15.533 9.9389 15.8768 8.61055 15.8768C6.64698 15.8768 4.68341 15.1276 3.18505 13.6311C0.188317 10.6325 0.188317 5.77309 3.18505 2.77636C4.68528 1.27799 6.64885 0.528809 8.61242 0.528809C10.576 0.528809 12.5396 1.27799 14.0398 2.77636C16.5526 5.2892 16.9562 9.10798 15.2579 12.0449C15.3252 12.0972 15.3924 12.1533 15.4559 12.2168L16.3079 13.0687L13.4756 15.8992V15.8973ZM12.6236 12.2149C14.8357 10.0029 14.8375 6.4027 12.6236 4.19252C11.5176 3.08649 10.0641 2.53348 8.61242 2.53348C7.16076 2.53348 5.70723 3.08649 4.60121 4.19252C2.38916 6.40457 2.38916 10.0048 4.60121 12.2149C5.70723 13.321 7.15889 13.874 8.61242 13.874C10.0659 13.874 11.5176 13.321 12.6236 12.2149Z"
                                fill="#20836D"
                            />
                        </svg>
                        {t('ourTeamButton7')}
                    </TabButton>
                    <TabButton active={activeButton === 9} onClick={() => handleButtonClick(4, 9, 9)}>
                        <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.47314 13.1068C1.52555 13.1415 1.57977 13.1707 1.63217 13.2018L1.69181 13.2347C1.7388 13.2603 1.78578 13.284 1.83096 13.3078L1.90867 13.348C2.19601 13.485 2.48516 13.5964 2.76889 13.6768C3.31827 13.8358 3.87849 13.9125 4.4857 13.9125C5.09291 13.9107 5.65495 13.8321 6.20071 13.6732C6.48444 13.5928 6.77539 13.4813 7.06274 13.3425C7.18924 13.2804 7.33923 13.2036 7.49284 13.1068C7.61212 13.0337 7.77115 12.9314 7.93018 12.7925L7.98439 12.745V12.3942L7.89223 12.3906L4.93208 5.18654C5.07484 5.20482 5.2158 5.22126 5.35857 5.2377C5.92964 5.30348 6.54227 5.35829 7.2308 5.40762C8.28258 5.4807 9.3723 5.5209 10.5542 5.53003C10.4946 6.10373 10.4421 6.68473 10.3897 7.24746L10.2343 9.07269L10.106 10.8961C10.0879 11.1774 10.0608 11.4734 10.0265 11.8005L9.99036 12.1202C9.96867 12.3175 9.94518 12.5148 9.92711 12.714C9.89458 13.0575 9.87831 13.3608 9.87651 13.6385C9.8747 13.9363 9.88735 14.2377 9.91626 14.5648C9.95783 15.0216 10.0175 15.4692 10.0952 15.8985C9.96506 15.9132 9.83494 15.9296 9.70663 15.9497C9.24761 16.0228 8.82654 16.1251 8.41812 16.2639C8.20306 16.3352 7.98439 16.4211 7.77295 16.5161C7.54886 16.6147 7.332 16.7244 7.12779 16.8395C6.91274 16.9601 6.69588 17.1007 6.48263 17.2542C6.30553 17.3821 6.0706 17.5593 5.83205 17.8023L5.78687 17.848V18.2865L7.20189 18.3486L8.4651 18.3797L10.9933 18.4053L12.2584 18.3943C12.3939 18.3943 12.5294 18.3925 12.665 18.3906C12.9469 18.3906 13.2379 18.387 13.5234 18.3778L14.7884 18.3468L15.4209 18.3212L16.2016 18.2828V17.8443L16.1546 17.7987C15.9161 17.5575 15.6812 17.3821 15.504 17.2542C15.2944 17.1026 15.0757 16.9637 14.8571 16.8413C14.4396 16.6074 14.0041 16.4138 13.5686 16.2676C13.1601 16.1287 12.7264 16.0209 12.28 15.9515C12.1662 15.9333 12.0505 15.9186 11.9331 15.904C12.0108 15.4728 12.0704 15.0216 12.1138 14.5611C12.1427 14.2341 12.1572 13.9308 12.1535 13.6348C12.1535 13.3553 12.1355 13.0538 12.1029 12.7085C12.0849 12.5112 12.0614 12.3139 12.0397 12.1165C12.027 12.0087 12.0162 11.9028 12.0036 11.795C11.9692 11.4679 11.9421 11.172 11.924 10.8906L11.7957 9.06538L11.6403 7.24015C11.5879 6.67742 11.5337 6.09824 11.4759 5.52455C12.6198 5.51541 13.6824 5.47522 14.7143 5.40396C15.4047 5.35646 16.0173 5.29982 16.5865 5.23405C16.7456 5.21578 16.9046 5.19568 17.0618 5.17558L14.0908 12.3979L13.9806 12.4034V12.7524L14.0348 12.7999C14.1957 12.9387 14.3529 13.0429 14.4703 13.1141C14.5228 13.1488 14.5752 13.1781 14.6276 13.2073L14.6872 13.242C14.7342 13.2676 14.7812 13.2913 14.83 13.3151L14.9059 13.3535C15.1932 13.4905 15.4824 13.6019 15.7661 13.6823C16.3155 13.8413 16.8757 13.918 17.4811 13.918C18.0883 13.9162 18.6503 13.8376 19.1943 13.6787C19.478 13.5983 19.769 13.4868 20.0563 13.3498C20.1828 13.2877 20.3328 13.2109 20.4864 13.1141C20.6057 13.041 20.7629 12.9387 20.9238 12.7999L20.978 12.7524V12.4034L20.8894 12.3979L17.9257 5.19385C18.007 5.20664 18.0883 5.21943 18.1696 5.23222C18.316 5.25232 18.4624 5.27242 18.6106 5.29069C18.7027 5.30165 18.7949 5.31992 18.8925 5.34002C18.9413 5.35098 18.9883 5.36011 19.0371 5.36925C19.2033 5.40031 19.3714 5.40214 19.5286 5.37473C19.6877 5.34733 19.8449 5.30348 19.9985 5.24136C20.1286 5.18654 20.3003 5.10615 20.4756 4.95999L20.5316 4.91249V4.67862L20.4756 4.63112C20.3003 4.48496 20.1286 4.40457 19.9967 4.34975C19.8431 4.28763 19.6858 4.24379 19.5286 4.21638C19.3696 4.18715 19.2051 4.18897 19.0353 4.22003C18.9883 4.22917 18.9413 4.2383 18.8925 4.24927C18.7931 4.26936 18.7009 4.28946 18.607 4.30042C18.4606 4.31869 18.3142 4.33697 18.166 4.35889C18.0196 4.38081 17.8733 4.40457 17.7251 4.43014L17.4739 4.47582C17.1576 4.43014 16.845 4.39178 16.5811 4.36072C16.0119 4.29494 15.3992 4.24013 14.7089 4.1908C13.6878 4.11955 12.6415 4.08118 11.5138 4.07204L11.615 3.22612C11.6295 3.08361 11.6566 2.9411 11.6837 2.78945C11.6963 2.7182 11.7108 2.64511 11.7216 2.57203C11.7415 2.44048 11.7524 2.32538 11.7542 2.21758C11.7542 2.10431 11.7469 1.98737 11.7289 1.86131C11.6909 1.61466 11.6349 1.3881 11.5554 1.16886C11.5084 1.04096 11.4596 0.92768 11.4054 0.81989C11.3512 0.71392 11.2825 0.58968 11.1885 0.46544L11.1415 0.40332H10.8759L10.8289 0.46544C10.7331 0.59151 10.6644 0.71575 10.6102 0.82172C10.556 0.92768 10.509 1.04279 10.462 1.17068C10.3825 1.38993 10.3265 1.61648 10.2885 1.86496C10.2705 1.9892 10.2614 2.10613 10.2632 2.22124C10.2632 2.32903 10.2741 2.44414 10.2958 2.57751C10.3084 2.64877 10.3211 2.72002 10.3337 2.79128C10.3608 2.94292 10.3879 3.08543 10.4024 3.22977L10.4385 3.56229L10.5036 4.07387C9.33616 4.083 8.2627 4.1232 7.22538 4.19628C6.54046 4.24379 5.92783 4.2986 5.35134 4.3662C5.12544 4.3936 4.83087 4.42832 4.53088 4.47217L4.32667 4.43563C4.17848 4.41005 4.0303 4.3863 3.88211 4.36437C3.73392 4.34427 3.58573 4.32418 3.43754 4.30591C3.34538 4.29494 3.2514 4.27667 3.15201 4.25657C3.10322 4.24744 3.05623 4.23648 3.00744 4.22734C2.83937 4.19628 2.6713 4.19445 2.51408 4.22186C2.35505 4.24927 2.19601 4.29312 2.0406 4.35524C1.91048 4.41005 1.73699 4.49044 1.55989 4.6366L1.50206 4.68411V4.91797L1.55989 4.96547C1.73699 5.11164 1.90867 5.19203 2.0424 5.24684C2.19601 5.30896 2.35505 5.35281 2.51408 5.38021C2.67492 5.40762 2.84118 5.40579 3.00924 5.37473C3.05804 5.3656 3.10683 5.35646 3.15562 5.3455C3.25502 5.3254 3.34718 5.3053 3.44116 5.29617C3.58935 5.2779 3.73753 5.25963 3.88572 5.2377C3.93813 5.23039 3.99054 5.22126 4.04295 5.21395L1.09364 12.3888L0.983398 12.3942V12.745L1.03761 12.7925C1.20026 12.9332 1.35748 13.0355 1.47314 13.1068ZM17.4937 5.51359L20.3202 12.3833H20.2913C20.1937 12.3796 20.0961 12.376 19.9949 12.3723L19.16 12.3541C18.9684 12.3486 18.775 12.3467 18.5835 12.3467L17.4829 12.3394L16.6462 12.3449C16.5522 12.3449 16.4564 12.3449 16.3625 12.3467C16.1781 12.3467 15.992 12.3467 15.8095 12.3541L14.6691 12.3833L17.4956 5.51359H17.4937ZM4.49474 5.49714L7.32116 12.3668L6.16276 12.3376C5.96939 12.3321 5.77783 12.3303 5.58447 12.3303L4.4839 12.323L3.64718 12.3285C3.5532 12.3285 3.45923 12.3285 3.36706 12.3303C3.18092 12.3303 2.99479 12.3303 2.81045 12.3376L1.97192 12.3559L1.67012 12.3668L4.49474 5.49714Z"
                                fill="#20836D"
                            />
                        </svg>
                        {t('ourTeamButton8')}
                    </TabButton>
                </ButtonsContainer>
                <Content style={{ justifyContent: 'flex-start', marginBottom: '100px' }}>
                    {displayedAvatars.map((item: any) => (
                        <CommandImage key={item.img} img={item.img} />
                    ))}
                </Content>
            </Inner>
            <Inner fixed>
                <Title>{t('largestCommandTitle')}</Title>
                <Content>
                    {cards.map((row: any) => (
                        <LargestCommandCard key={row.id} row={row} />
                    ))}
                </Content>
            </Inner>
        </Box>
    );
};

export default CommandSection;
