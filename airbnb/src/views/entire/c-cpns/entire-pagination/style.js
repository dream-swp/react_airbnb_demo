import styled from "styled-components"

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .desc {
            margin-top: 16px;
            color: #222;
        }
        .MuiPaginationItem-page.Mui-selected {
            background-color: #222;
            color: #fff;
        }

        .MuiPaginationItem-page {
            margin: 0 9px;
            &:hover {
                text-decoration: underline;
            }
        }
        .MuiPaginationItem-icon {
            font-size: 25px;
        }
    }
`

export default PaginationWrapper
