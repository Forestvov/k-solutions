import styled from '@emotion/styled';

const Card = styled.div`
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    max-width: 334px;
    font-size: 32px;
    font-weight: 500;
    color: #373737;

    @media (max-width: 400px) {
        font-size: 26px;
    }
`;

const Label = styled.p`
    max-width: 334px;
    font-size: 18px;
    font-weight: 400;
    color: #747474;

    @media (max-width: 400px) {
        font-size: 14px;
    }
`;

const Img = styled.img``;

export interface CardProps {
    title: string;
    label: string;
    img?: string;
}
const OnCard = (props: CardProps) => {
    const { title, img, label } = props;
    return (
        <Card>
            <div>
                <Title>{title}</Title>
                <Label>{label}</Label>
            </div>
            <div>
                <Img src={img} />
            </div>
        </Card>
    );
};

export default OnCard;
