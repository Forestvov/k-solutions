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

    const [activeButton, setActiveButton] = useState<number | null>(null);
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
                    <TabButton active={activeButton === 1} onClick={() => handleButtonClick(3, 18, 1)}>
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
                    <TabButton active={activeButton === 2} onClick={() => handleButtonClick(19, 32, 2)}>
                        <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.8952 13.1612L2.66985 13.135C2.4641 13.1345 2.29751 12.9705 2.29799 12.7689C2.29846 12.5673 2.46581 12.4045 2.67156 12.405L13.8969 12.4312C14.1027 12.4317 14.2692 12.5957 14.2688 12.7969C14.2683 12.9981 14.101 13.1617 13.8952 13.1612ZM13.8907 15.108L2.6653 15.0818C2.45955 15.0813 2.29296 14.9173 2.29343 14.7157C2.29391 14.5141 2.46126 14.3509 2.66701 14.3514L13.8924 14.3776C14.0982 14.3781 14.2647 14.5421 14.2642 14.7437C14.2637 14.9453 14.0965 15.1085 13.8907 15.108ZM13.8861 17.0548L2.66075 17.0286C2.455 17.0281 2.28841 16.8641 2.28888 16.6625C2.28935 16.4609 2.45671 16.2977 2.66245 16.2982L13.8878 16.3244C14.0936 16.3249 14.2601 16.4889 14.2597 16.6905C14.2592 16.8921 14.0919 17.0553 13.8861 17.0548ZM8.89978 18.99L2.65619 18.9754C2.45045 18.9749 2.28386 18.8109 2.28433 18.6093C2.2848 18.4077 2.45215 18.2445 2.6579 18.245L8.90109 18.2596C9.10689 18.2601 9.273 18.424 9.27253 18.6256C9.27206 18.8272 9.10518 18.9905 8.89978 18.99ZM5.62135 5.66667C5.62471 4.23067 6.81582 3.06905 8.2814 3.07248C9.74699 3.07591 10.9327 4.24308 10.9293 5.67908C10.9276 6.41628 10.6129 7.08074 10.1092 7.55277L11.5002 10.1508L10.3039 9.85563L9.87179 10.9878L8.41664 8.26961C8.36804 8.2719 8.31863 8.27338 8.26963 8.27327C8.22065 8.27315 8.17127 8.27144 8.12269 8.26892L6.65484 10.9803L6.22802 9.8461L5.03038 10.1357L6.43344 7.54417C5.9316 7.0698 5.61963 6.40387 5.62135 5.66667ZM14.9072 0.985168L1.66507 0.954204C1.17967 0.953069 0.785231 1.33775 0.784119 1.81335L0.741381 20.0909C0.740269 20.5665 1.13291 20.953 1.6183 20.9541L14.8604 20.9851C15.3458 20.9862 15.7402 20.6016 15.7413 20.126L15.7841 1.84842C15.7852 1.37282 15.3926 0.986303 14.9072 0.985168Z"
                                fill="#20836D"
                            />
                        </svg>
                        {t('ourTeamButton2')}
                    </TabButton>
                    <TabButton active={activeButton === 3} onClick={() => handleButtonClick(32, 40, 3)}>
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
                    <TabButton active={activeButton === 4} onClick={() => handleButtonClick(11, 28, 4)}>
                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.9159 15.9822C1.51149 15.9822 1.16516 15.8354 0.876929 15.5419C0.589188 15.2479 0.445312 14.8947 0.445312 14.4822V3.98218H1.9159V14.4822H10.0041V15.9822H1.9159ZM4.85708 12.9822C4.45266 12.9822 4.10659 12.8354 3.81884 12.5419C3.5306 12.2479 3.38649 11.8947 3.38649 11.4822V2.48218C3.38649 2.06968 3.5306 1.71643 3.81884 1.42243C4.10659 1.12893 4.45266 0.982178 4.85708 0.982178H11.4747C11.8791 0.982178 12.2255 1.12893 12.5137 1.42243C12.8015 1.71643 12.9453 2.06968 12.9453 2.48218V11.4822C12.9453 11.8947 12.8015 12.2479 12.5137 12.5419C12.2255 12.8354 11.8791 12.9822 11.4747 12.9822H4.85708Z"
                                fill="#20836D"
                            />
                        </svg>
                        {t('ourTeamButton')}
                    </TabButton>
                    <TabButton active={activeButton === 5} onClick={() => handleButtonClick(0, 7, 5)}>
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
                </ButtonsContainer>
                <Content style={{ justifyContent: 'center', marginBottom: '100px' }}>
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
