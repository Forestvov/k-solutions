import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

interface Prop {
    status: string;
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
`;

const Tag = ({ status }: Prop) => {
    const { t } = useTranslation('personal');

    const statuses = {
        'Collection completed': t('Займ погашен'),
        'Loan payed': t('Сбор завершен'),
        'In progress': t('Идет сбор'),
        Franchise: t('Франшиза'),
    };

    // @ts-ignore
    return <Wrapper>{statuses[status]}</Wrapper>;
};

export default Tag;
