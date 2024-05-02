import Grid from '@mui/material/Unstable_Grid2';
import type { IBrief } from 'types/brief';

import InvestCard from '../invest-card';
import InvestSkeletonCard from '../invest-skeleton-card';

interface Props {
    list: IBrief[];
    loading: boolean;
}

const mockArr = [1, 2, 3, 4, 5, 6];

const List = ({ list, loading }: Props) => {
    return (
        <Grid
            container
            rowSpacing={{ lg: '60px', xs: '30px' }}
            columnSpacing={{ lg: '35px', xs: '20px' }}
            columns={{ xs: 12 }}
            marginBottom={{ lg: '60px', xs: '30px' }}
        >
            {loading
                ? mockArr.map((_, index) => (
                      // @ts-ignore
                      <Grid item="item" xs={12} md={6} xl={6} lg={4} key={index}>
                          <InvestSkeletonCard />
                      </Grid>
                  ))
                : list.map((brief, index) => (
                      // @ts-ignore
                      <Grid item="item" xs={12} md={6} xl={6} lg={4} key={index}>
                          <InvestCard card={brief} />
                      </Grid>
                  ))}
        </Grid>
    );
};

export default List;
