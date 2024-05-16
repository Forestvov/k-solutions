// @ts-nocheck
/* eslint-disable */
import { Controller, useFormContext } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import { getCoinPrice } from 'api/coin';

const Item = styled(MenuItem)`
    display: flex;
    align-items: center;
    padding: 10px 20px;
`;

const BoxImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    flex: 0 0 auto;

    img {
        width: 100%;
        height: auto;
    }
`;

const Label = styled.div`
    font-size: 16px;
    line-height: 19px;
    color: #696969;
    margin-bottom: 10px;
`;

interface Props {
    name: string;
    isFirstStep?: boolean;
    label?: string;
    items: any[];
}

const Selector = ({ items = [], name, label, isFirstStep }: Props) => {
    const { control, setValue, getValues } = useFormContext();

    const setCurrencyCoin = (currentName: string) => {
        const currentAmount = getValues('amountIn');
        const coin = currentName === 'TRC20' ? 'TUSD' : currentName;
        setValue('amountIn', 0);
        // @ts-ignore
        getCoinPrice(coin)
            .then(({ data }) => setValue('amountIn', data.price))
            .catch(() => {
                setValue('amountIn', 1);
            });
    };

    if (isFirstStep) {
        return (
            <div>
                {label && <Label>{label}</Label>}
                <Controller
                    render={({ field: { value, onChange }, fieldState: { error } }) => (
                        <Select
                            variant="outlined"
                            sx={{
                                width: '100%',
                                height: {
                                    sm: '66px',
                                    xs: '60px',
                                },
                                outline: 'none',
                                border: error ? '1px solid #FF5630 ' : '1px solid #20836D',
                                borderRadius: '10px',
                                fontSize: '16px',
                                paddingLeft: '22px',
                                paddingRight: '22px',
                                color: '#838383',
                                '.MuiSelect-select': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingLeft: 0,
                                },
                                '.MuiSelect-icon': {
                                    color: '#838383 !important',
                                },
                                '.MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '& .MuiSvgIcon-root': {
                                    color: 'white',
                                },
                            }}
                            IconComponent={() => (
                                <svg
                                    width="20"
                                    height="11"
                                    viewBox="0 0 20 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1 1L10 10L19 1" stroke="#838383" strokeLinecap="round" />
                                </svg>
                            )}
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                        >
                            {items.map((item, key) => (
                                <Item
                                    value={item.currentName}
                                    key={key}
                                    onClick={() => {
                                        setValue('qrCode', item.qrCode);
                                        setValue('transactionLinkType', item.transactionLinkType);
                                        setValue('contact', item.value);
                                        setCurrencyCoin(item.currentName);
                                    }}
                                >
                                    <BoxImage>
                                        <img src={item.image} />
                                    </BoxImage>
                                    {item.currentName}
                                </Item>
                            ))}
                        </Select>
                    )}
                    name={name}
                    control={control}
                />
            </div>
        );
    }

    return (
        <div>
            {label && <Label>{label}</Label>}
            <Controller
                render={({ field: { value, onChange } }) => (
                    <Select
                        variant="outlined"
                        placeholder="Платежная система"
                        sx={{
                            width: '100%',
                            height: {
                                sm: '66px',
                                xs: '60px',
                            },
                            outline: 'none',
                            border: '1px solid #20836D',
                            borderRadius: '10px',
                            fontSize: '16px',
                            paddingLeft: '22px',
                            paddingRight: '22px',
                            color: '#838383',
                            '.MuiSelect-select': {
                                display: 'flex',
                                alignItems: 'center',
                                paddingLeft: 0,
                            },
                            '.MuiSelect-icon': {
                                color: '#838383 !important',
                            },
                            '.MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'white',
                            },
                        }}
                        IconComponent={() => (
                            <svg
                                width="20"
                                height="11"
                                viewBox="0 0 20 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1 1L10 10L19 1" stroke="#838383" strokeLinecap="round" />
                            </svg>
                        )}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    >
                        {items.map((item, key) => (
                            <Item
                                value={item.currentName}
                                key={key}
                                onClick={() => {
                                    setValue('qrCode', item.qrCode);
                                    setValue('transactionLinkType', item.transactionLinkType);
                                    setValue('contact', item.value);
                                }}
                            >
                                <BoxImage>
                                    <img src={item.image} />
                                </BoxImage>
                                {item.currentName}
                            </Item>
                        ))}
                    </Select>
                )}
                name={name}
                control={control}
            />
        </div>
    );
};

export default Selector;
