import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const ButtonStyled = styled(Button)<{ active?: boolean }>`
    display: flex;
    align-items: center;
    color: #494949;
    background: rgba(32, 131, 109, 0.2);
    border-radius: 7px;
    padding: 8px 20px;
    margin-left: 0;
    margin-right: 20px;
    margin-bottom: 20px;

    @media (min-width: 1668px) {
        margin-right: 30px;
        padding: 10px 25px;
    }

    svg {
        margin-right: 6px;
    }

    &:hover {
        color: #fff;
        background: #20836d;
    }

    ${({ active }) =>
        active &&
        `
        pointer-events: none;
        color: #fff;
        background: #20836d;
    `}
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;

    @media (min-width: 1668px) {
        margin-bottom: 34px;
    }
`;

interface IProps {
    filters: Record<string, string>;
    onChangeFilter: (value: Record<string, string>) => void;
}

const Filters = ({ filters, onChangeFilter }: IProps) => {
    const { t } = useTranslation('personal');

    return (
        <Wrapper>
            <ButtonStyled
                active={!filters.transactionType && !filters.transactionLinkType}
                onClick={() =>
                    onChangeFilter({
                        transactionType: '',
                        transactionLinkType: '',
                    })
                }
            >
                {t('Все')}
            </ButtonStyled>
            <ButtonStyled
                active={filters.transactionType === 'Out'}
                onClick={() =>
                    onChangeFilter({
                        transactionType: 'Out',
                        transactionLinkType: '',
                    })
                }
            >
                {t('Вывод')}
            </ButtonStyled>
            <ButtonStyled
                active={filters.transactionType === 'In'}
                onClick={() =>
                    onChangeFilter({
                        transactionType: 'In',
                        transactionLinkType: '',
                    })
                }
            >
                {t('Пополнение')}
            </ButtonStyled>
            <ButtonStyled
                active={filters.transactionLinkType === 'p2p'}
                onClick={() =>
                    onChangeFilter({
                        transactionLinkType: 'p2p',
                        transactionType: '',
                    })
                }
            >
                {t('Активные P2P')}
            </ButtonStyled>
        </Wrapper>
    );
};

export default Filters;
