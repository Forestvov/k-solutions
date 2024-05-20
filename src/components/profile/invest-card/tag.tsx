import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

interface Prop {
    status: string;
    isHot?: boolean;
}

const Wrapper = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
    z-index: 1;
    background: rgba(0, 104, 56, 0.6);
    backdrop-filter: blur(3.55px);
    border-radius: 5px;
    padding: 0 10px;
    line-height: 28px;
    font-weight: 700;
    font-size: 11px;
    color: #fff;
    height: 28px;

    @media (min-width: 1668px) {
        line-height: 31px;
        height: 31px;
        font-size: 13px;
        padding: 0 15px;
        left: 30px;
        top: 30px;
    }

    svg {
        margin-right: 5px;
    }
`;

const Tag = ({ status }: Prop) => {
    const { t } = useTranslation('personal');

    const statuses = {
        'Loan payed': t('Займ погашен'),
        'Collection completed': t('Сбор завершен'),
        'In progress': t('Идет сбор'),
        Franchise: t('Франшиза'),
    };

    // @ts-ignore
    return <Wrapper>{statuses[status]}</Wrapper>;
};

export default Tag;
