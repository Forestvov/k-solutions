import Stack from '@mui/material/Stack';
import Item from './item';

const List = () => {
    return (
        <Stack
            direction={{
                xs: 'row',
                sm: 'column',
            }}
            justifyContent={{
                xs: 'space-between',
            }}
            spacing={{
                lg: '45px',
                xs: '20px',
            }}
        >
            <Stack
                direction={{
                    sm: 'row',
                }}
                justifyContent="space-between"
                spacing={{
                    xs: '20px',
                    sm: 0,
                }}
            >
                <Item />
                <Item />
                <Item />
                <Item />
            </Stack>
            <Stack
                direction={{
                    sm: 'row',
                }}
                justifyContent="space-between"
                spacing={{
                    xs: '20px',
                    sm: 0,
                }}
            >
                <Item />
                <Item />
                <Item />
                <Item />
            </Stack>
        </Stack>
    );
};

export default List;
