import styled from '@emotion/styled';

const CondCard = styled.div`
    width: 470px;
    min-height: 280px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    gap: 75px;
    margin-bottom: 50px;

    background: #f6f7f8;
    padding: 25px;
    border-radius: 25px;
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;
`;

const Title = styled.h2`
    font-size: 42px;
    color: #006838;
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
}

interface Props {
    row: TCondCard;
}

export const GetLoanCard = ({ row }: Props) => {
    const { title, text } = row;
    return (
        <CondCard>
            <Title>{title}</Title>
            <Paragraph>{text}</Paragraph>
        </CondCard>
    );
};
