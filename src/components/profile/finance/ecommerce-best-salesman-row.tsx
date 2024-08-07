import type { IHistoryRow } from 'types/brief';
import { useTranslation } from 'react-i18next';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { fDate } from 'helpers/format-time';
import { fCurrency, fPercent } from 'helpers/number-format';

const EcommerceBestSalesmanRow = ({
    companyName,
    createdDate,
    briefcaseAccountAmount,
    investedAmount,
    percents,
    gainAmount,
    image,
    companyType,
}: IHistoryRow) => {
    const { t } = useTranslation('personal');

    return (
        <TableRow>
            <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                <Stack direction="row" alignItems="center" spacing="15px">
                    <Box
                        sx={{
                            background: '#EDEDED',
                            width: '64px',
                            height: '64px',
                            borderRadius: '12px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url(${image})`,
                        }}
                    />
                    <span>{companyName}</span>
                </Stack>
            </TableCell>

            <TableCell>{fDate(createdDate)}</TableCell>

            <TableCell>{fCurrency(investedAmount ?? briefcaseAccountAmount)}</TableCell>

            <TableCell>
                {fPercent(percents)}/ {t(companyType === 'Franchise' ? 'ежедневно' : 'Ежемесячно')}
            </TableCell>

            <TableCell>
                <Stack direction="row" alignItems="center" spacing="7px" sx={{ color: '#00A76F' }}>
                    <span>{gainAmount ? fCurrency(gainAmount) : '$0'}</span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.35355 0.146447C4.15829 -0.0488155 3.84171 -0.0488156 3.64645 0.146447L0.464466 3.32843C0.269204 3.52369 0.269204 3.84027 0.464466 4.03553C0.659728 4.2308 0.976311 4.2308 1.17157 4.03553L4 1.20711L6.82843 4.03553C7.02369 4.2308 7.34027 4.2308 7.53553 4.03553C7.7308 3.84027 7.7308 3.52369 7.53553 3.32843L4.35355 0.146447ZM3.5 0.5L3.5 11.5L4.5 11.5L4.5 0.5L3.5 0.5Z"
                            fill="#00A76F"
                        />
                    </svg>
                </Stack>
            </TableCell>
        </TableRow>
    );
};

export default EcommerceBestSalesmanRow;
