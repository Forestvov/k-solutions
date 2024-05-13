import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import styled from '@emotion/styled';

const BarContainer = styled.div`
    background: #f6f7f8;
    padding: 20px;
    border-radius: 20px;
    margin: 0 0 10px 0;

    @media (max-width: 1280px) {
        display: none;
    }
`;

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export const BarGraph = ({ columns }: { columns: number[] }) => {
    const barChartData: any = {
        labels: columns,
        datasets: [
            {
                label: 'Мясяцы',
                backgroundColor: '#20836D',
                data: columns,
            },
        ],
    };

    const options: any = {};

    return (
        <BarContainer>
            <Bar options={options} data={barChartData} />
        </BarContainer>
    );
};
