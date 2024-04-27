// @ts-nocheck
/* eslint-disable */
import { Controller, useFormContext } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';

import type { SelectorItem } from './types';

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
    label?: string;
    items: SelectorItem[];
}

const Selector = ({ items = [], name, label }: Props) => {
    const { control } = useFormContext();

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
                            <Item value={item.value} key={key}>
                                <BoxImage>
                                    <img src={item.logo} alt={item.value} />
                                </BoxImage>
                                {item.value}
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
