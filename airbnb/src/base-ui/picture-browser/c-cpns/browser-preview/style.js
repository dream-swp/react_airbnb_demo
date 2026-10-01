import styled from "styled-components"

export const PreviewWrapper = styled.div`

    display: flex;
    justify-content: center;
    width: 100%;
    flex-shrink: 0;
    padding: 10px 0 20px 0; 
    box-sizing: border-box;
    background-color: rgb(33, 33, 33);
    .info {
        width: 100%;
        max-width: 105vh;
        margin: 0 auto;  
        color: #fff;
        display: flex;
        flex-direction: column;

        .desc {
             width: 100%; 
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;

            .content {
                padding-bottom: 5px;
            }
            .toggle {
                padding-bottom: 5px;
                cursor: pointer;

                .content {
                    padding-right: 5px;
                }
            }
        }

        .list {
            margin-top: 3px;
            overflow: hidden;
            transition: height 300ms ease;
            height: ${(props) => (props.$isHiddenIndicator ? "67px" : "0")};

            .item {
                margin-right: 15px;
                cursor: pointer;

                img {
                    height: 67px;
                    opacity: 0.5;
                }

                &.active {
                    img {
                        opacity: 1;
                    }
                }
            }
        }
    }
`

export default PreviewWrapper
