import styled from '@emotion/styled';

const CondCard = styled.div`
    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;

    background: white;
    padding: 25px;
    border-radius: 25px;
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;

    @media (max-width: 1280px) {
        font-size: 12px;
    }
    @media (max-width: 770px) {
        font-size: 11px;
    }
`;

const Title = styled.h2`
    font-size: 1.375rem;
    color: #373737;
    user-select: none;
    font-weight: 500;
    margin: 0;

    @media (max-width: 1280px) {
        font-size: 18px;
    }

    @media (max-width: 770px) {
        font-size: 14px;
    }
`;

export interface TCondCard {
    title: string;
    text: string;
}

interface Props {
    row: TCondCard;
}

export const BorrowerCard = ({ row }: Props) => {
    const { title, text } = row;
    return (
        <CondCard>
            <Title>{title}</Title>
            <Paragraph>{text}</Paragraph>
        </CondCard>
    );
};
