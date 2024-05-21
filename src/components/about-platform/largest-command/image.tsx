import styled from '@emotion/styled';

const Image = styled.img`
    width: 100px;
    height: 100px;

    @media (max-width: 770px) {
        width: 80px;
        height: 80px;
    }

    filter: grayscale(100%);
    transition: all 0.3s;

    :hover {
        filter: grayscale(0);
    }
`;

interface Props {
    img: string;
}

export const CommandImage = ({ img }: Props) => {
    return <Image src={img} />;
};
