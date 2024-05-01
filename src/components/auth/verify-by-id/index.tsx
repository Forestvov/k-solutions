import { useEffect } from 'react';
import { useParams } from 'react-router';

import axios, { endpoints } from 'helpers/axios';
import { useRouter } from 'context/auth/hooks/useRouter';

const VerifyById = () => {
    const { id } = useParams();

    const router = useRouter();

    useEffect(() => {
        async function verifyAcc() {
            try {
                await axios.put(`${endpoints.auth.verify}/${id}`);
                await router.push('/login');
            } catch (e) {}
        }

        verifyAcc();
    }, []);

    return <div />;
};

export default VerifyById;
