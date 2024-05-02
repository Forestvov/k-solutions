import Stack from '@mui/material/Stack';

import type { CompanyType } from 'types/company';

import Item from './item';

interface Props {
    companyType: CompanyType;
}

const List = ({ companyType }: Props) => {
    return (
        <Stack
            direction={{
                xs: 'row',
                sm: 'column',
            }}
            justifyContent={{
                xs: 'space-between',
            }}
            spacing={{
                lg: '45px',
                xs: '20px',
            }}
        >
            {companyType === 'Company' ? (
                <>
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        justifyContent="space-between"
                        spacing={{
                            xs: '20px',
                            sm: 0,
                        }}
                    >
                        <Item label="Сумма займа" value="" />
                        <Item label="Ставка, % ежемясчный" value="" />
                        <Item label="Минимальная сумма" value="" />
                        <Item label="Срок займа" value="" />
                    </Stack>
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        justifyContent="space-between"
                        spacing={{
                            xs: '20px',
                            sm: 0,
                        }}
                    >
                        <Item label="Собрано" value="" />
                        <Item label="До конца сбора:" value="" />
                        <Item label="Количество инвесторов" value="" />
                        <Item label="Последняя инвестия" value="" />
                    </Stack>
                </>
            ) : (
                <>
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        justifyContent="space-between"
                        spacing={{
                            xs: '20px',
                            sm: 0,
                        }}
                    />
                    <Stack
                        direction={{
                            sm: 'row',
                        }}
                        justifyContent="space-between"
                        spacing={{
                            xs: '20px',
                            sm: 0,
                        }}
                    />
                </>
            )}
        </Stack>
    );
};

export default List;
