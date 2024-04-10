import styled from '@emotion/styled';
import Skeleton from '@mui/material/Skeleton';

const SkeletonBlock = styled(Skeleton)`
    height: 149.42px;
    background: #f6f7f8;
    width: 100%;
    transform: scale(1);
`;

const SkeletonLoader = () => {
    return <SkeletonBlock />;
};

export default SkeletonLoader;
