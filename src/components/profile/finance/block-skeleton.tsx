import Skeleton from '@mui/material/Skeleton';
import styled from '@emotion/styled';

const SkeletonBlock = styled(Skeleton)`
    border-radius: 20px;
    height: 430px;
    background: #f6f7f8;
    width: 100%;
    transform: scale(1);
    flex: 0 0 auto;
`;

const BlockSkeleton = () => <SkeletonBlock />;

export default BlockSkeleton;
