import Box from '@mui/material/Box';

import Scrollbar from 'components/shared/scrollbar';

import Item from './item';
import ButtonMore from './button-more';

const List = () => {
    return (
        <>
            <Scrollbar>
                <Box
                    sx={{
                        display: 'grid',
                        gridGap: {
                            lg: '35px',
                            xs: '20px',
                        },
                        gridTemplateColumns: 'repeat(3, 1fr)',
                    }}
                >
                    <Item />
                    <Item />
                    <Item />
                </Box>
            </Scrollbar>
            <ButtonMore />
        </>
    );
};

export default List;
