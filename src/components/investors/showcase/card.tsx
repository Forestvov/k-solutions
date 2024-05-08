import styled from '@emotion/styled';

import cardInpImg from 'assets/pages/investors/CardInpImg.png';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    margin-bottom: 50px;
`;

const CardItem = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 420px) {
        width: 320px;
        height: 250px;
    }
`;

const LineIt = styled.div`
    width: 100%;
    height: 5px;
    background: green;
    border-radius: 10px;
`;

const CardInput = styled.div`
    position: absolute;
    top: 10rem;

    display: flex;
    background: white;
    padding: 2px 35px;
    border-radius: 20px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        padding: 1px 15px;
        top: 7rem;
    }

    @media (max-width: 420px) {
        top: 5rem;
        padding: 0 10px;
    }
`;

const DropDownItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    max-width: 334px;
    font-size: 32px;
    font-weight: 500;
    color: #373737;
    margin: 65px 0 0 0;

    @media (max-width: 1024px) {
        font-size: 26px;
    }
`;

const Label = styled.p`
    min-width: 445px;
    font-size: 18px;
    font-weight: 400;
    color: #747474;
    margin: 0;

    @media (max-width: 1024px) {
        font-size: 14px;
        min-width: 345px;
    }
    @media (max-width: 420px) {
        font-size: 12px;
        min-width: 300px;
    }
`;

const SumT = styled.p`
    font-size: 18px;
    font-weight: 500;

    @media (max-width: 420px) {
        font-size: 12px;
    }
`;

const Img = styled.img`
    @media (max-width: 1024px) {
        width: 400px;
    }
    @media (max-width: 420px) {
        width: 320px;
    }
`;

interface DropdownProps {
    isOpen: boolean;
}

const DropdownContent = styled.div<DropdownProps>`
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
    overflow: hidden;
    transition:
        max-height 0.8s ease,
        opacity 0.9s ease;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 420px) {
        gap: 10px;
    }
`;

interface TCardProps {
    title: string;
    label: string;
    sum: string;
    sum2: string;
    sum3: string;
    invSum: string;
    img?: string;
}

interface Props {
    row: TCardProps;
}
const ShowCasesCard = ({ row }: Props) => {
    const { title, sum3, invSum, sum2, sum, img, label } = row;
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <Card>
            <Img src={img} />
            <CardInput>
                <img style={{ marginRight: '30px' }} src={cardInpImg} alt="InpImg" />
                <div>
                    <SumT>
                        ${sum}
                        <span style={{ fontSize: '12px', fontWeight: '400', marginLeft: '5px' }}>Собрано</span>
                    </SumT>
                    <LineIt />
                    <p style={{ fontSize: '14px', fontWeight: '400' }}>100% от цели</p>
                </div>
            </CardInput>
            <CardItem>
                <Title>{title}</Title>
                <Label>{label}</Label>
            </CardItem>
            <DropdownContent isOpen={showDropdown}>
                <p style={{ fontSize: '18px', marginLeft: '15px', fontWeight: '500' }}>Подробная информация</p>
                <DropDownItem>
                    <p
                        style={{
                            fontSize: '16px',
                            fontWeight: '400',
                            display: 'flex',
                            alignItems: 'center',
                            margin: '0',
                        }}
                    >
                        <svg
                            style={{ marginRight: '5px' }}
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.875 9L8.625 10.75L12.125 7.25M17.375 9C17.375 13.3492 13.8492 16.875 9.5 16.875C5.15076 16.875 1.625 13.3492 1.625 9C1.625 4.65076 5.15076 1.125 9.5 1.125C13.8492 1.125 17.375 4.65076 17.375 9Z"
                                stroke="#006838"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Предварительная оценка:
                    </p>
                    <p style={{ textAlign: 'end', fontSize: '16px', fontWeight: '500', color: 'green', margin: '0' }}>
                        {sum2}
                    </p>
                </DropDownItem>
                <DropDownItem>
                    <p
                        style={{
                            fontSize: '16px',
                            fontWeight: '400',
                            display: 'flex',
                            alignItems: 'center',
                            margin: '0',
                        }}
                    >
                        <svg
                            style={{ marginRight: '5px' }}
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.875 9L8.625 10.75L12.125 7.25M17.375 9C17.375 13.3492 13.8492 16.875 9.5 16.875C5.15076 16.875 1.625 13.3492 1.625 9C1.625 4.65076 5.15076 1.125 9.5 1.125C13.8492 1.125 17.375 4.65076 17.375 9Z"
                                stroke="#006838"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Инвесторов:
                    </p>
                    <p style={{ fontSize: '18px', fontWeight: '500', color: 'green', margin: '0' }}>{sum3}</p>
                </DropDownItem>
                <DropDownItem>
                    <p
                        style={{
                            fontSize: '16px',
                            fontWeight: '400',
                            display: 'flex',
                            alignItems: 'center',
                            margin: '0',
                        }}
                    >
                        <svg
                            style={{ marginRight: '5px' }}
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.875 9L8.625 10.75L12.125 7.25M17.375 9C17.375 13.3492 13.8492 16.875 9.5 16.875C5.15076 16.875 1.625 13.3492 1.625 9C1.625 4.65076 5.15076 1.125 9.5 1.125C13.8492 1.125 17.375 4.65076 17.375 9Z"
                                stroke="#006838"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Цена акций компании:
                    </p>
                    <p style={{ fontSize: '18px', fontWeight: '500', color: 'green', margin: '0' }}>{invSum}</p>
                </DropDownItem>
            </DropdownContent>
            <Button style={{ marginTop: '15px' }} variant="green" fullWidth onClick={toggleDropdown}>
                {showDropdown ? 'Скрыть' : 'Подробнее'}
            </Button>
        </Card>
    );
};

export default ShowCasesCard;
