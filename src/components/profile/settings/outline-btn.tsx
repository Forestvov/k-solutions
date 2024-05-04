import styled from '@emotion/styled';
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
            <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.0341 19.0949H14.6704V13.675H16.443C16.8925 13.675 17.1582 13.1642 16.8925 12.7964L13.4444 8.02526C13.2248 7.71876 12.7701 7.71876 12.5505 8.02526L9.10237 12.7964C8.83674 13.1642 9.09726 13.675 9.5519 13.675H11.3245V19.0949H5.31712C2.63527 18.9468 0.5 16.4386 0.5 13.721C0.5 11.8463 1.51655 10.2116 3.0235 9.32788C2.88557 8.95497 2.81406 8.55652 2.81406 8.13764C2.81406 6.22203 4.36187 4.67422 6.27748 4.67422C6.69125 4.67422 7.0897 4.74573 7.46261 4.88366C8.57111 2.53384 10.9618 0.904297 13.7407 0.904297C17.3369 0.909405 20.2998 3.66278 20.6369 7.17217C23.4005 7.64725 25.5 10.2065 25.5 13.1029C25.5 16.1985 23.0889 18.8804 20.0341 19.0949Z"
                    fill="#006838"
                />
            </svg>
            {text}
        </OutlineStyle>
    );
};

export default OutlineBtn;
