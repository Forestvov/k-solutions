import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 1.125rem;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;
`;

const Title = styled.h2`
    font-size: 2.375rem;
    color: #006838;
    line-height: 50px;
    user-select: none;
    font-weight: 500;
    max-width: 250px;
    margin-bottom: 10px;

    @media (max-width: 1280px) {
        font-size: 1.75rem;
    }
`;

const CardStack = styled(Stack)`
    @media (max-width: 770px) {
        width: 100%;
    }
`;

export interface TReqCard {
    title: string;
    text: string;
}

interface Props {
    row: TReqCard;
}

export const CrowdfundingGoalsCard = ({ row }: Props) => {
    const { title, text } = row;
    return (
        <CardStack
            sx={{
                padding: { xs: '15px', sm: '25px' },
                height: { xs: '220px', sm: '230px' },
                background: 'white',
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
