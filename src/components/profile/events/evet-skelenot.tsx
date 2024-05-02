import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

const SkeletonBlock = styled(Skeleton)`
    border-radius: 20px;
    height: 310px;
    background: #f6f7f8;
    width: 100%;
    transform: scale(1);
`;

export default function EvetSkelenot() {
    return (
        <Stack spacing="30px" sx={{ marginBottom: '30px' }}>
            <SkeletonBlock />
            <SkeletonBlock />
        </Stack>
    );
}
