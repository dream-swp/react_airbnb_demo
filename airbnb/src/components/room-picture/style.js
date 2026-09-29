import styled from "styled-components"

export const PictureWapper = styled.div`
    .cover {
        position: relative;
        box-sizing: border-box;
        border-radius: 10px;
        overflow: hidden;
        padding: 66.66% 8px 0;
        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

export default PictureWapper
