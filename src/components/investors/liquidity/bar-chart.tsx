import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const BarContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 20px;
    border: 15px solid #f6f7f8;
    margin: 0 0 10px 0;

    @media (max-width: 400px) {
        border: 7px solid #f6f7f8;
        padding: 10px;
    }
`;

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export const BarGraphLiquidity = () => {
    const { t } = useTranslation('business-page');
    const barChartData: any = {
        labels: ['1%', '', '', '', '9%', '', '', '', '17%', '', '', '', '24%', '', '', '', '32%', '', '', '', '40%'],
        datasets: [
            {
                label: t('Доходность'),
                backgroundColor: '#20836D',
                data: [
                    12, 30, 20, 40, 40, 50, 90, 91, 90, 91, 55, 33, 30, 31, 55, 33, 30, 31, 55, 91, 90, 91, 55, 33, 12,
                    30, 20, 40, 40,
                ],
                borderRadius: 10,
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
