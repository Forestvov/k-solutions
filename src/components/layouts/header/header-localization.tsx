import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

import Arrow from 'assets/header/arrow-lang.svg?react';
import RuIcon from 'assets/language/rus.jpg';
import DeuIcon from 'assets/language/deu.jpg';
import EngIcon from 'assets/language/eng.jpg';

const Wrapper = styled.div`
    position: relative;

    &:hover .lang-list {
        opacity: 1;
        pointer-events: auto;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const Icon = styled.img`
    border-radius: 50%;
`;

const Button = styled.button`
    background: transparent;
    border: none;
    font-size: 1.063rem;
    font-weight: 500;
    cursor: pointer;
    color: #494949;
    display: flex;
    align-items: baseline;
    gap: 4px;
    padding: 0;
    text-transform: capitalize;

    svg {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        margin-top: 1px;
    }

    &:hover svg {
        transform: rotate(180deg);
    }
`;

const ButtonLang = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    background: transparent;
    cursor: pointer;
`;

const HeaderLocalization = () => {
    const { i18n } = useTranslation();

    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <Wrapper>
            <Button>
                {i18n.language}
                <Arrow />
            </Button>
            <Overlay className="lang-list">
                <Stack
                    spacing="15px"
                    sx={{
                        margin: '30px 0 0',
                        background: '#fff',
                        padding: '15px',
                        borderRadius: '15px',
                        boxShadow: '2px 1px 8px -3px rgba(0,0,0,0.1)',
                    }}
                >
                    {i18n.language !== 'ru' && (
                        <ButtonLang onClick={() => changeLang('ru')}>
                            <Icon src={RuIcon} /> Русский
                        </ButtonLang>
                    )}
                    {i18n.language !== 'en' && (
                        <ButtonLang onClick={() => changeLang('en')}>
                            <Icon src={EngIcon} /> English
                        </ButtonLang>
                    )}
                    {i18n.language !== 'de' && (
                        <ButtonLang onClick={() => changeLang('de')}>
                            <Icon src={DeuIcon} /> Deutsch
                        </ButtonLang>
                    )}
                </Stack>
            </Overlay>
        </Wrapper>
    );
};

export default HeaderLocalization;
