import Stack from '@mui/material/Stack';

import useDeviceSize from 'hooks/useDeviceSize';

import InvestCard from 'components/profile/invest-card';
import PaginatorPage from 'components/shared/paginator-page';

const List = () => {
    const { lg, md } = useDeviceSize();

    return (
        <>
            <Stack
                spacing={{ lg: '30px', xs: '20px' }}
                direction="row"
                sx={{ marginBottom: { lg: '30px', xs: '20px' } }}
            >
                <InvestCard />
                {md && <InvestCard />}
                {lg && <InvestCard />}
            </Stack>
            <PaginatorPage />
        </>
    );
};

export default List;
