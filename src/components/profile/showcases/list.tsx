import Box from '@mui/material/Box';
import type { IBrief } from 'types/brief';

import { useSettingsContext } from 'context/settings/hooks/useSettingsContext';

import InvestCard from '../invest-card';
import InvestSkeletonCard from '../invest-skeleton-card';

interface Props {
    list: IBrief[];
    loading: boolean;
}

const mockArr = [1, 2, 3, 4, 5, 6];

const List = ({ list, loading }: Props) => {
    const { settings } = useSettingsContext();
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
                    sm: 'repeat(2,1fr)',
                    md: 'repeat(3, 1fr)',
                },
                marginBottom: { lg: '60px', xs: '30px' },
            }}
        >
            {loading
                ? mockArr.map((_, index) => <InvestSkeletonCard key={index} />)
                : list.map((brief, index) => (
                      <InvestCard
                          isHot={brief.percentFinish >= Number(settings.briefcaseHot)}
                          card={brief}
                          key={index}
                      />
                  ))}
        </Box>
    );
};

export default List;
