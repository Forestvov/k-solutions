import styled from '@emotion/styled';

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 14px;

    button {
        width: 9px;
        height: 9px;
        padding: 0;
        border: none;
        margin: 0 5px;
        display: block;
        border-radius: 50%;
        background: #d9d9d9;
        cursor: pointer;
        transition:
            background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        &:hover {
            background: #006838;
        }

        &.active {
            transform: scale(1.5);
            background: #006838;
        }
    }

    @media (min-width: 768px) {
        height: 17px;
        button {
            &.active {
                transform: scale(1.9);
            }
        }
    }
`;

interface Props {
    currentPage: number;
    countPage: number;
    onChangePage: (page: number) => void;
}

const Pagination = ({ countPage, currentPage, onChangePage }: Props) => {
    if (countPage < 2) {
        return null;
    }
    // @ts-ignore
    const list = [...new Array(countPage).keys()];

    return (
        <PaginationWrapper>
            {list.map((_, idx) => (
                <button className={currentPage === idx ? 'active' : ''} onClick={() => onChangePage(idx)} key={idx} />
            ))}
        </PaginationWrapper>
    );
};

export default Pagination;
