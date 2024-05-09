import type { FC } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import WhiteWrapper from '../white-wrapper';
import Title from '../title';

import AccountForm from './account-form';
import SecurityForm from './security-form';
import EntrepreneursForm from './entrepreneurs-form';
import DocumentForm from './document-form';

import AccountIcon from 'assets/pages/personal/settings/account.svg?react';
import DocumentsIcon from 'assets/pages/personal/settings/doccuments.svg?react';
import UsersIcon from 'assets/pages/personal/settings/users.svg?react';
import LockIcon from 'assets/pages/personal/settings/lock.svg?react';

import { useAuthContext } from 'context/auth/hooks/useAuthContext';

type SettingPage = 'account' | 'document' | 'entrepreneurs' | 'security';

const TitleMessage = styled(Title)`
    margin: 0 0 20px;
`;

const RenderPage: FC<{ type: SettingPage }> = ({ type }) => {
    switch (type) {
        case 'account':
            return <AccountForm />;
        case 'document':
            return <DocumentForm />;
        case 'entrepreneurs':
            return <EntrepreneursForm />;
        case 'security':
            return <SecurityForm />;
        default:
            return <div>unknown page</div>;
    }
};

const Button = styled.button<{ active: boolean }>`
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    gap: 10px;
    color: #494949;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    padding-bottom: 10px;
    border-bottom: 2px solid transparent;
    transition:
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    ${({ active }) =>
        active &&
        `
    color: #006838;
        border-color: #006838
    `}
`;

const Settings = () => {
    const { t } = useTranslation('personal');

    // @ts-ignore
    const { user } = useAuthContext();
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState<SettingPage>(searchParams.get('tab') ? 'document' : 'account');

    return (
        <div>
            <Stack
                direction="row"
                spacing={{
                    md: '60px',
                    xs: '30px',
                }}
                sx={{
                    padding: {
                        md: '0 0 30px 90px',
                        xs: '0 0 10px 10px',
                    },
                    overflowX: 'auto',
                    '-webkit-overflow-scrolling': 'touch',
                    '-webkit-box-pack': 'start',
                    '::-webkit-scrollbar': {
                        width: '0',
                        opacity: '0',
                    },
                }}
            >
                <Button active={page === 'account'} onClick={() => setPage('account')}>
                    <AccountIcon />
                    {t('Аккаунт')}
                </Button>
                <Button active={page === 'document'} onClick={() => setPage('document')}>
                    <DocumentsIcon />
                    {t('Документы')}
                </Button>
                <Button active={page === 'entrepreneurs'} onClick={() => setPage('entrepreneurs')}>
                    <UsersIcon />
                    {t('Предпринимателям')}
                </Button>
                <Button active={page === 'security'} onClick={() => setPage('security')}>
                    <LockIcon />
                    {t('Безопасность')}
                </Button>
            </Stack>
            <WhiteWrapper>
                {user?.status === 'Not verified YC' && searchParams.get('tab') && (
                    <Box
                        sx={{
                            padding: {
                                xl: '30px',
                                xs: '15px',
                            },
                        }}
                    >
                        <TitleMessage>{t('Вы не верифицировали свой профиль!')}</TitleMessage>
                        <Typography>{t('Пожалуйста, пройдите верификацию!')}</Typography>
                    </Box>
                )}
                <RenderPage type={page} />
            </WhiteWrapper>
        </div>
    );
};

export default Settings;
