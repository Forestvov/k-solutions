import styled from '@emotion/styled';

import UploadIcon from 'assets/load/upload-icon.svg?react';

import DefaultButton from './default-button';

const OutlineStyle = styled(DefaultButton)`
    background: transparent;
    border: 1px solid #006838;
    color: #006838;
`;

interface Props {
    text: string;
}

const OutlineBtn = ({ text }: Props) => {
    return (
        <OutlineStyle>
            <UploadIcon />
            {text}
        </OutlineStyle>
    );
};

export default OutlineBtn;
