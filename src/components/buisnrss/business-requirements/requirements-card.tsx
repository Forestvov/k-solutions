import styled from '@emotion/styled';

const CondCard = styled.div`
    width: 49%;
    min-height: 325px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25px 30px;
    border-radius: 20px;
    background: white;
    gap: 10px;

    @media (max-width: 1280px) {
        width: 100%;
    }
`;

const Line = styled.div`
    width: 70px;
    height: 3px;
    background: #006838;
    border-radius: 10px;
`;

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 1.125rem;
    color: #747474;
    max-width: 405px;
    margin: 7px 0 0 0;
`;

const Label = styled.p`
    font-weight: 400;
    font-size: 2.125rem;
    color: #006838;
    margin: 0;
`;

const Title = styled.h2`
    font-size: 2.375rem;
    color: #373737;
    line-height: 50px;
    user-select: none;
    font-weight: 500;
    margin: 0;
    max-width: 250px;

    @media (max-width: 1280px) {
        font-size: 1.75rem;
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

export const RequirementsCard = ({ row }: Props) => {
    const { title, text, label } = row;
    return (
        <CondCard>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>
                <Title>{title}</Title>
                <Label>{label}</Label>
            </div>
            <Line />
            <div>
                <Paragraph>{text}</Paragraph>
            </div>
        </CondCard>
    );
};
