import styled from '@emotion/styled';

const Card = styled.div`
    padding: 15px;
    border-radius: 30px;
    background-color: white;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    width: 48%;
    height: 250px;

    @media (max-width: 770px) {
        width: 100%;
    }
`;

const Title = styled.h3`
    max-width: 394px;
    font-size: 32px;
    font-weight: 500;
    color: #373737;

    @media (max-width: 1280px) {
        font-size: 26px;
    }

    @media (max-width: 770px) {
        font-size: 22px;
    }
`;

const Label = styled.p`
    max-width: 334px;
    font-size: 18px;
    font-weight: 400;
    color: #747474;

    @media (max-width: 1280px) {
        font-size: 16px;
    }

    @media (max-width: 770px) {
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
