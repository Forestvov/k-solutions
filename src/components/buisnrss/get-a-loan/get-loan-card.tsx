import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    max-width: 300px;
    margin: 7px 0 0 0;
`;

const Title = styled.h2`
    font-size: 2.625rem;
    color: #006838;
    line-height: 50px;
    user-select: none;
    font-weight: 500;
    margin: 0;
    max-width: 300px;

    @media (max-width: 400px) {
        font-size: 2.375rem;
    }
`;

export interface TCondCard {
    title: string;
    text: string;
}

interface Props {
    row: TCondCard;
}

export const GetLoanCard = ({ row }: Props) => {
    const { title, text } = row;
    return (
        <Stack
            sx={{
                padding: { xs: '20px', sm: '25px' },
                width: { lg: '400px', xl: '350px', sm: '400px', xs: '400px' },
                height: { xs: '280px', sm: '280px' },
                background: '#f6f7f8',
                marginBottom: '50px',
                borderRadius: { xs: '25px', sm: '35px' },
                transition: 'background 400ms',

                '&:hover': {
                    background: '#006838',
                    color: '#fff',

                    '.stat-item-text': {
                        color: '#fff !important',
                    },
                },
            }}
        >
            <Title className="stat-item-text">{title}</Title>
            <Paragraph className="stat-item-text">{text}</Paragraph>
        </Stack>
    );
};
