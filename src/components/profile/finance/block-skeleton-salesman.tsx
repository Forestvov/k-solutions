import Skeleton from '@mui/material/Skeleton';
import styled from '@emotion/styled';

const SkeletonBlock = styled(Skeleton)`
    border-radius: 10px;
    height: 144px;
    background: #f6f7f8;
    width: 100%;
    transform: scale(1);
    flex: 0 0 auto;
`;

const BlockSkeletonSalesman = () => <SkeletonBlock />;

export default BlockSkeletonSalesman;
