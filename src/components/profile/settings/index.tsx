import type { FC } from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

import WhiteWrapper from '../white-wrapper';
import AccountForm from './account-form';
import SecurityForm from './security-form';
import EntrepreneursForm from './entrepreneurs-form';
import DocumentForm from './document-form';

import AccountIcon from 'assets/pages/personal/settings/account.svg?react';
import DocumentsIcon from 'assets/pages/personal/settings/doccuments.svg?react';
import UsersIcon from 'assets/pages/personal/settings/users.svg?react';
import LockIcon from 'assets/pages/personal/settings/lock.svg?react';

type SettingPage = 'account' | 'document' | 'entrepreneurs' | 'security';

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
    const [page, setPage] = useState<SettingPage>('account');

    return (
        <div>
            <Stack
                direction="row"
                spacing="60px"
                sx={{
                    padding: '0 0 30px 90px',
                }}
            >
                <Button active={page === 'account'} onClick={() => setPage('account')}>
                    <AccountIcon />
                    Аккаунт
                </Button>
                <Button active={page === 'document'} onClick={() => setPage('document')}>
                    <DocumentsIcon />
                    Документы
                </Button>
                <Button active={page === 'entrepreneurs'} onClick={() => setPage('entrepreneurs')}>
                    <UsersIcon />
                    Предпринимателям
                </Button>
                <Button active={page === 'security'} onClick={() => setPage('security')}>
                    <LockIcon />
                    Безопасность
                </Button>
            </Stack>
            <WhiteWrapper>
                <RenderPage type={page} />
            </WhiteWrapper>
        </div>
    );
};

export default Settings;
