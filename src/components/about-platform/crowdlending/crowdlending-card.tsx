import styled from '@emotion/styled';

const CondCard = styled.div`
    width: 100%;
    min-height: 325px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25px 30px;
    border-radius: 30px;
    background: #f6f7f8;
    gap: 10px;

    @media (max-width: 1280px) {
        width: 100%;
    }
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #747474;
    width: 100%;
    margin: 7px 0 0 0;
`;

const Label = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #006838;
    margin: 0;
`;

const Title = styled.h2`
    font-size: 38px;
    color: #373737;
    line-height: 50px;
    user-select: none;
    font-weight: 500;
    margin: 0;
    max-width: 250px;
    margin-bottom: 10px;

    @media (max-width: 1280px) {
        font-size: 28px;
    }
`;

export interface TReqCard {
    title: string;
    text: string;
    label: string;
}

interface Props {
    row: TReqCard;
}

export const CrowdlendingCard = ({ row }: Props) => {
    const { title, text, label } = row;
    return (
        <CondCard>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Title>{title}</Title>
                <Label>{label}</Label>
            </div>
            <Paragraph>{text}</Paragraph>
        </CondCard>
    );
};
