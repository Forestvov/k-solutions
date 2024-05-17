import Skeleton from '@mui/material/Skeleton';
import styled from '@emotion/styled';

const SkeletonBlock = styled(Skeleton)`
    height: 81.5px;
    background: #fff;
    width: 100%;
    transform: scale(1);

    @media (min-width: 1668px) {
        height: 86.4px;
    }

    &:last-of-type {
        border-radius: 15px 15px 0 0;
    }

    &:first-of-type {
        border-radius: 0 0 15px 15px;
    }
`;

export default SkeletonBlock;
