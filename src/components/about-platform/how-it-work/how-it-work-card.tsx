import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

const CardStack = styled(Stack)`
    @media (max-width: 770px) {
        width: 100%;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;
`;

const Title = styled.h2`
    font-size: 22px;
    color: #373737;
    line-height: 30px;
    user-select: none;
    font-weight: 500;
    max-width: 250px;
    margin-bottom: 10px;

    @media (max-width: 770px) {
        font-size: 20px;
    }
`;

export interface TReqCard {
    title: string;
    text: string;
}

interface Props {
    row: TReqCard;
}

export const HowItWorkCard = ({ row }: Props) => {
    const { title, text } = row;
    return (
        <CardStack
            sx={{
                padding: { xs: '15px', sm: '25px' },
                height: { xs: '220px', sm: '230px' },
                width: { xs: '320px', sm: '350px' },
                background: '#f6f7f8',
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
        </CardStack>
    );
};
