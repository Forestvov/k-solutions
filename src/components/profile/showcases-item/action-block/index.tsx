import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import ActionBlockCompany from './view/action-block-company';
import ActionBlockFranchise from './view/action-block-franchise';
import ActionBlockFranchiseInvest from './view/action-block-franchise-invest';
import ActionBlockFranchiseInvestClose from 'components/profile/showcases-item/action-block/view/action-block-franchise-invest-close';

const ActionBlock = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xl'));

    return (
        <>
            {matches && <ActionBlockFranchiseInvestClose />}
            <ActionBlockCompany />
            <ActionBlockFranchise />
            <ActionBlockFranchiseInvest />
        </>
    );
};

export default ActionBlock;
