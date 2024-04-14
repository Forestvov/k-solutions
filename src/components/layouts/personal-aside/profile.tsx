import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import UserNameCircle from './user-name-circle';

const Profile = () => {
    return (
        <Stack spacing="15px" alignItems="center" marginBottom="28px">
            <Typography variant="body2" fontWeight={500}>
                Профиль
            </Typography>
            <UserNameCircle />
        </Stack>
    );
};

export default Profile;
