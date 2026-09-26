import { styled } from "styled-components"

export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    color: ${(props) => props.theme.textColor.primary};
    align-items: center;
    font-weight: 600;

    .buttons {
        display: flex;
    }

    .button {
        height: 18px;
        line-height: 18px;
        padding: 12px 15px;
        border-radius: 22px;

        &:hover {
            background-color: #f5f5f5;
        }
    }
    .profile {
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 80px;
        height: 40px;
        margin-right: 24px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 25px;
        background-color: #fff;
        color: ${(props) => props.theme.textColor.secondary};
        cursor: pointer;
        ${(props) => props.theme.mixin.boxShadow}
    }

    .panel {
        position: absolute;
        right: 0;
        top: 54px;
        width: 240px;
        /* height: 200px; */
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.18);
        color: #666;

        .top,
        .bottom {
            padding: 10px 0;

            .item {
                height: 40px;
                line-height: 40px;
                padding: 0 16px;
                &:hover {
                    background-color: #f5f5f5;
                }
            }
        }
        .top {
            border-bottom: 1px solid #ddd;
        }
    }
`
