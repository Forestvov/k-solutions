import useDeviceSize from 'hooks/useDeviceSize';

import Desktop from './views/desktop';
import Mobile from './views/mobile';

const PersonalAside = () => {
    const { xl } = useDeviceSize();

    if (xl) {
        return <Desktop />;
    }

    return <Mobile />;
};

export default PersonalAside;
