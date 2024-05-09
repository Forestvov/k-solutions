import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0 20px;

    @media (min-width: 768px) {
        margin: 60px 0 30px 0;
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    color: #006838;

    &:hover svg {
        transform: rotate(180deg);
    }

    svg {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        margin-left: 5px;
    }
`;

const ButtonMore = () => {
    const { t } = useTranslation('personal');

    return (
        <Wrapper>
            <Button>
                {t('Еще')}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.5L5 4.5L9 0.5" stroke="#006838" strokeLinecap="round" />
                </svg>
            </Button>
        </Wrapper>
    );
};

export default ButtonMore;
