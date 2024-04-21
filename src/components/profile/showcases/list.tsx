import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';

import InvestCard from '../invest-card';

const List = () => {
    return (
        <Grid
            container
            rowSpacing={{ lg: '60px', xs: '30px' }}
            columnSpacing={{ lg: '35px', xs: '20px' }}
            columns={{ xs: 12 }}
            marginBottom={{ lg: '60px', xs: '30px' }}
        >
            {Array.from(Array(6)).map((_, index) => (
                // @ts-ignore
                <Grid item="item" xs={12} md={6} xl={6} lg={4} key={index}>
                    <InvestCard />
                </Grid>
            ))}
        </Grid>
    );
};

export default List;
