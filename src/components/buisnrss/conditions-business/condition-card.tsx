import styled from '@emotion/styled';
import Stack from '@mui/material/Stack';

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;

    @media (max-width: 770px) {
        font-size: 16px;
    }
`;

const CondStack = styled(Stack)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Label = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #747474;
    margin: 0;
`;

const Span = styled.span`
    font-size: 58px;
    color: #20836d;
    user-select: none;
    font-weight: 500;

    @media (max-width: 1280px) {
        font-size: 48px;
    }
`;

const Title = styled.h2`
    font-size: 34px;
    color: #373737;
    line-height: 50px;
    user-select: none;
    font-weight: 500;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
        font-size: 32px;
    }

    @media (max-width: 770px) {
        font-size: 28px;
    }
`;

export interface TCondCard {
    title: string;
    text: string;
    label: string;
    count: string;
}

interface Props {
    row: TCondCard;
}

export const ConditionCard = ({ row }: Props) => {
    const { title, text, count, label } = row;
    return (
        <CondStack
            sx={{
                padding: { xs: '15px', sm: '25px' },
                width: { xs: '100%', sm: '45%' },
                height: { xs: '410', sm: '320px' },
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
            <div>
                <Title className="stat-item-text">{title}</Title>
                <Paragraph className="stat-item-text">{text}</Paragraph>
            </div>

            <div>
                <Label className="stat-item-text">{label}</Label>
                <Span className="stat-item-text">{count}</Span>
            </div>
        </CondStack>
    );
};
