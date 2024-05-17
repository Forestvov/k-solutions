import { useTranslation } from 'react-i18next';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import UserNameCircle from './user-name-circle';

const Profile = () => {
    const { t } = useTranslation('personal');

    return (
        <Stack spacing="15px" alignItems="center" marginBottom="28px">
            <Typography
                variant="body2"
                fontWeight={500}
                sx={{
                    fontSize: {
                        xs: '13px',
                        lg: '16px',
                    },
                }}
            >
                {t('Профиль')}
            </Typography>
            <UserNameCircle />
        </Stack>
    );
};

export default Profile;
