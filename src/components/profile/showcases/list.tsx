import Box from '@mui/material/Box';
import type { IBrief } from 'types/brief';

import InvestCard from '../invest-card';
import InvestSkeletonCard from '../invest-skeleton-card';

interface Props {
    list: IBrief[];
    loading: boolean;
    isHot?: boolean;
}

const mockArr = [1, 2, 3, 4, 5, 6];

const List = ({ list, loading, isHot }: Props) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridGap: {
                    lg: '35px',
                    xs: '20px',
                },
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: '450px',
                    md: 'repeat(2, 454px)',
                    xl: 'repeat(2, 450px)',
                    lg: 'repeat(3, 1fr)',
                },
                marginBottom: { lg: '60px', xs: '30px' },
            }}
        >
            {loading
                ? mockArr.map((_, index) => <InvestSkeletonCard key={index} />)
                : list.map((brief, index) => <InvestCard isHot={isHot} card={brief} key={index} />)}
        </Box>
    );
};

export default List;
