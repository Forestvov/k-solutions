import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

const Text = styled.span`
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 17px;
    color: #494949;
`;

const Timer = styled.span`
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 17px;
    color: #494949;
`;

const LastInvest = () => {
    return (
        <Stack
            direction={{
                sm: 'row',
            }}
            spacing={{
                sm: '7px',
                xs: '5px',
            }}
            alignItems={{
                sm: 'center',
            }}
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.6668 17.5V15.8333C16.6668 14.9493 16.3156 14.1014 15.6905 13.4763C15.0654 12.8512 14.2176 12.5 13.3335 12.5H6.66683C5.78277 12.5 4.93493 12.8512 4.30981 13.4763C3.68469 14.1014 3.3335 14.9493 3.3335 15.8333V17.5"
                    stroke="#494949"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9.99984 9.16667C11.8408 9.16667 13.3332 7.67428 13.3332 5.83333C13.3332 3.99238 11.8408 2.5 9.99984 2.5C8.15889 2.5 6.6665 3.99238 6.6665 5.83333C6.6665 7.67428 8.15889 9.16667 9.99984 9.16667Z"
                    stroke="#494949"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <Text>Последняя инвестия </Text>
            <Timer>2 часа назад</Timer>
        </Stack>
    );
};

export default LastInvest;
