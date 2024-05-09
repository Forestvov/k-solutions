import styled from '@emotion/styled';

const CondCard = styled.div`
    width: 510px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25px 30px;
    border-radius: 30px;
    background: #f6f7f8;
    margin-bottom: 25px;
    gap: 10px;

    @media (max-width: 1280px) {
        width: 45%;
    }

    @media (max-width: 770px) {
        width: 100%;
        padding: 15px 20px;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;
`;

const Title = styled.h2`
    font-size: 26px;
    color: #373737;
    line-height: 30px;
    user-select: none;
    font-weight: 500;
    max-width: 250px;
    margin-bottom: 10px;

    @media (max-width: 770px) {
        font-size: 24px;
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
        <CondCard>
            <Title>{title}</Title>
            <Paragraph>{text}</Paragraph>
        </CondCard>
    );
};
