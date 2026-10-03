import styled from "styled-components"

export const SlickWapper = styled.div`
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

    .slick {
        position: relative;
        cursor: pointer;
        &:hover {
            .control {
                display: flex;
            }
        }
        .control {
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            display: none;
            justify-content: space-between;
            bottom: 0;
            color: #fff;
        }
        .button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 100%;
            border-radius: 10px;

            background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
            &.right {
                background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
            }
        }

        .indicator {
            position: absolute;
            z-index: 9;
            width: 30%;
            left: 0;
            right: 0;
            bottom: 10px;
            margin: 0 auto;

            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 4px;
                padding: 0;
                width: auto; /* 改为 auto */

                .dot {
                    flex-shrink: 0;
                    width: 5px;
                    height: 5px;
                    background-color: #fff;
                    border-radius: 50%;

                    transition:
                        transform 0.3s ease-out,
                        background-color 0.3s;
                    /* transition: transform 0.3s ease-out; */
                    &.active {
                        width: 8px;
                        height: 8px;
                        background-color: #4A4A4A;
                    }
                }
            }
        }
    }
`

export default SlickWapper
