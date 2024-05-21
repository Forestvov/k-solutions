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
    height: 210px;

    @media (max-width: 770px) {
        width: 100%;
    }
`;

const Title = styled.h3`
    max-width: 394px;
    font-size: 24px;
    font-weight: 500;
    color: #373737;
    margin: 0 0 10px 0;

    @media (max-width: 1280px) {
        font-size: 26px;
    }

    @media (max-width: 770px) {
        font-size: 22px;
    }
`;

const Label = styled.p`
    max-width: 334px;
    font-size: 16px;
    font-weight: 400;
    color: #747474;
    margin: 20px 0 0 0;

    @media (max-width: 1280px) {
        font-size: 14px;
    }

    @media (max-width: 770px) {
        font-size: 12px;
    }
`;

const Img = styled.img`
    @media (max-width: 770px) {
        width: 95%;
    }
`;

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
