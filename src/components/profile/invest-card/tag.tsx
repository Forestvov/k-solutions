import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

interface Prop {
    status: string;
    isHot?: boolean;
}

const Wrapper = styled.div`
    position: absolute;
    left: 30px;
    top: 30px;
    z-index: 1;
    background: rgba(0, 104, 56, 0.6);
    backdrop-filter: blur(3.55px);
    border-radius: 5px;
    padding: 0 15px;
    line-height: 31px;
    font-weight: 700;
    font-size: 13px;
    color: #fff;
    height: 31px;
    display: flex;
    align-items: center;

    svg {
        margin-right: 5px;
    }
`;

const Tag = ({ status, isHot }: Prop) => {
    const { t } = useTranslation('personal');

    const statuses = {
        'Loan payed': t('Займ погашен'),
        'Collection completed': t('Сбор завершен'),
        'In progress': t('Идет сбор'),
        Franchise: t('Франшиза'),
    };

    if (isHot) {
        return (
            <Wrapper>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.193 5.25894C13.1171 5.22385 13.0335 5.20831 12.95 5.21375C12.8665 5.21919 12.7857 5.24543 12.7149 5.29009C12.6443 5.33512 12.5861 5.39723 12.5459 5.47067C12.5056 5.54412 12.4844 5.62653 12.4844 5.71031V6.54102C12.4844 6.8158 12.2612 7.03906 11.9864 7.03906C11.7403 7.03906 11.5321 6.86202 11.4917 6.62127C11.0865 4.10962 9.24123 0 8.5 0C7.75877 0 5.91348 4.10962 5.5088 6.61835C5.46796 6.86202 5.25977 7.03906 5.01367 7.03906C4.73888 7.03906 4.51562 6.8158 4.51562 6.54102V5.71027C4.51562 5.54004 4.42857 5.3815 4.2851 5.29005C4.21433 5.2454 4.13351 5.21916 4.05001 5.21372C3.96651 5.20828 3.88297 5.22381 3.807 5.25891C2.11149 6.04978 1.0293 9.49623 1.0293 11.5215C1.0293 14.7471 4.10125 17 8.5 17C12.8987 17 15.9707 14.7471 15.9707 11.5215C15.9707 9.49623 14.8885 6.04978 13.193 5.25894Z"
                        fill="url(#paint0_linear_1736_8253)"
                    />
                    <path
                        d="M10.916 10.2636C10.8713 10.1913 10.809 10.1317 10.7349 10.0904C10.6607 10.049 10.5772 10.0272 10.4923 10.0272H9.3873L8.98311 8.41244C8.95852 8.31371 8.90427 8.22489 8.82766 8.15793C8.75105 8.09097 8.65576 8.0491 8.55463 8.03794C8.34306 8.01606 8.14802 8.1245 8.05462 8.31031L6.06243 12.2947C5.9851 12.4489 5.99337 12.6322 6.08431 12.7791C6.17526 12.926 6.3353 13.0155 6.50795 13.0155H7.61299L8.01717 14.6303C8.04176 14.729 8.09601 14.8178 8.17262 14.8848C8.24923 14.9517 8.34452 14.9936 8.44565 15.0048C8.54683 15.0158 8.64897 14.9956 8.73835 14.9469C8.82773 14.8983 8.90007 14.8234 8.94566 14.7324L10.9378 10.748C10.9759 10.6721 10.9938 10.5878 10.99 10.5029C10.9862 10.4181 10.9607 10.3357 10.916 10.2636Z"
                        fill="url(#paint1_linear_1736_8253)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_1736_8253"
                            x1="8.5"
                            y1="17"
                            x2="8.5"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#006838" />
                            <stop offset="1" stopColor="#00FF89" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_1736_8253"
                            x1="8.50014"
                            y1="15.0076"
                            x2="8.50014"
                            y2="8.03515"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#9AFFC8" />
                            <stop offset="1" stopColor="#CBDDFF" />
                        </linearGradient>
                    </defs>
                </svg>
                {t('Горячее предложение')}
            </Wrapper>
        );
    }

    // @ts-ignore
    return <Wrapper>{statuses[status]}</Wrapper>;
};

export default Tag;
