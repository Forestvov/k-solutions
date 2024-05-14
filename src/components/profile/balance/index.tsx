import Stack from '@mui/material/Stack';

import WhiteWrapper from '../white-wrapper';

import AllAssets from './all-assets';
import Well from './well';
import History from './history';

const Balance = () => {
    return (
        <WhiteWrapper>
            <Stack
                spacing={{
                    lg: '60px',
                    xs: '30px',
                }}
            >
                <Stack
                    direction={{
                        md: 'row',
                    }}
                    spacing={{
                        xl: '30px',
                        xs: '20px',
                    }}
                >
                    <AllAssets />
                    <Well />
                </Stack>
                <History />
            </Stack>
        </WhiteWrapper>
    );
};

export default Balance;
