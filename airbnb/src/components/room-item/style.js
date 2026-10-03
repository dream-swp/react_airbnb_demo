import styled from "styled-components"

export const ItemWapper = styled.div`
    flex-shrink: 0;
    box-sizing: border-box;
    width: ${(props) => props.$itemWidth};
    padding: 8px;
    margin: 8px 0;

    .inner {
        width: 100%;
    }
    
    .desc {
        margin: 10px 0 5px;
        font-size: 12px;
        font-weight: 700;
        color: ${(props) => props.$verifyColor};
    }

    .name {
        font-size: 16px;
        font-weight: 700;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .price {
        margin: 8px 0;
    }

    .bottom {
        display: flex;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
        color: ${(props) => props.theme.textColor.primary};

        .count {
            margin: 0 2px 0 4px;
        }

        .MuiRating-decimal {
            margin-right: -2px;
        }
    }

    &:hover {
        cursor: pointer;
    }
    
`

export default ItemWapper
