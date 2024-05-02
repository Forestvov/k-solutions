import Skeleton from '@mui/material/Skeleton';
import styled from '@emotion/styled';

const SkeletonBlock = styled(Skeleton)`
    border-radius: 25px;
    height: 600px;
    background: #f6f7f8;
    width: 100%;
    transform: scale(1);
`;

export default function InvestSkeletonCard() {
    return <SkeletonBlock />;
}
