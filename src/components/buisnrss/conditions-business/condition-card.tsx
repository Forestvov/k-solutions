import styled from '@emotion/styled';

const CondCard = styled.div`
    width: 550px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 75px;
    margin-bottom: 50px;

    @media (max-width: 1280px) {
        width: 350px;
        gap: 50px;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;
`;

const Label = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    margin: 0;
`;

const Span = styled.span`
    font-size: 110px;
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

    @media (max-width: 400px) {
        font-size: 38px;
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
