import Stack from '@mui/material/Stack';
import useDeviceSize from 'hooks/useDeviceSize';

import Item from './item';
import ButtonMore from './button-more';

const List = () => {
    const { lg, md } = useDeviceSize();

    return (
        <>
            <Stack direction="row" spacing="30px" justifyContent="space-between">
                <Item />
                {md && <Item />}
                {lg && <Item />}
            </Stack>
            <ButtonMore />
        </>
    );
};

export default List;
