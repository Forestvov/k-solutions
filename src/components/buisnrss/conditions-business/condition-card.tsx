import styled from '@emotion/styled';

const CondCard = styled.div`
    width: 48%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 75px;
    margin-bottom: 50px;

    padding: 25px 25px;
    border-radius: 30px;
    background: white;

    @media (max-width: 770px) {
        width: 100%;
        height: 100%;
        justify-content: space-between;
        gap: 30px;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;

    @media (max-width: 770px) {
        font-size: 16px;
    }
`;

const Label = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    margin: 0;
`;

const Span = styled.span`
    font-size: 84px;
    color: #20836d;
    user-select: none;
    font-weight: 500;

    @media (max-width: 1280px) {
        font-size: 50px;
    }
`;

const Title = styled.h2`
    font-size: 42px;
    color: #373737;
    line-height: 50px;
    user-select: none;
    font-weight: 500;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
        font-size: 34px;
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
        <CondCard>
            <div>
                <Title>{title}</Title>
                <Paragraph>{text}</Paragraph>
            </div>

            <div>
                <Label>{label}</Label>
                <Span>{count}</Span>
            </div>
        </CondCard>
    );
};
