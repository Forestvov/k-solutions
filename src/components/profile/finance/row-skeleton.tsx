import Skeleton from '@mui/material/Skeleton';
import styled from '@emotion/styled';

const SkeletonBlock = styled(Skeleton)`
    height: 53px;
    background: #f6f7f8;
    width: 100%;
    transform: scale(1);
    flex: 0 0 auto;
`;

const RowSkeleton = () => {
    return (
        <tr>
            <td>
                <SkeletonBlock />
            </td>
            <td>
                <SkeletonBlock />
            </td>
            <td>
                <SkeletonBlock />
            </td>
            <td>
                <SkeletonBlock />
            </td>
            <td>
                <SkeletonBlock />
            </td>
        </tr>
    );
};

export default RowSkeleton;
