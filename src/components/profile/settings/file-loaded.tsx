import styled from '@emotion/styled';

const FileLoaded = styled.div`
    color: #006838;
    width: 100%;

    span {
        position: relative;
        button {
            position: absolute;
            top: -5px;
            right: -20px;
            background: transparent;
            border: none;
            color: #006838;
            cursor: pointer;
            font-weight: 500;
            font-size: 1rem;
        }
    }
`;

export default FileLoaded;
