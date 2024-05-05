import Skeleton from '@mui/material/Skeleton';
import styled from '@emotion/styled';

const SkeletonBlock = styled(Skeleton)`
    height: 86.4px;
    background: #fff;
    width: 100%;
    transform: scale(1);

    &:last-of-type {
        border-radius: 15px 15px 0 0;
    }

    &:first-of-type {
        border-radius: 0 0 15px 15px;
    }
`;

export default SkeletonBlock;
