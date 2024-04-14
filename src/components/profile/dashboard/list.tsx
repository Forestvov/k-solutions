import Stack from '@mui/material/Stack';

import InvestCard from 'components/profile/invest-card';
import Pagination from 'components/pagination';
import useDeviceSize from 'hooks/useDeviceSize';

// todo size зависит от размера девайса
// desktop 3
// laptop 2
// mob 1

const List = () => {
    const { lg, md } = useDeviceSize();

    return (
        <>
            <Stack
                spacing={{ lg: '30px', xs: '20px' }}
                direction="row"
                sx={{ marginBottom: { lg: '60px', xs: '20px' } }}
            >
                <InvestCard />
                {md && <InvestCard />}
                {lg && <InvestCard />}
            </Stack>
            <Pagination />
        </>
    );
};

export default List;
