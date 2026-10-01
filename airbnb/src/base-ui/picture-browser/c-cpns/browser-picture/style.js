import styled from "styled-components"

export const PictureWrapper = styled.div`

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;
    

    .control {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        color: #fff;

        .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 83px;
            height: 100%;
        }
    }

    .picture {
        position: relative;
        height: 100%;
        overflow: hidden;
        width: 100% !important;
        max-width: 105vh !important;

        img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            height: 100%;
            user-select: none;
        }
    }

    .pic-enter {
        transform: translateX(${(props) => (props.$isNext ? "100%" : "-100%")});
        opacity: 0;
    }
    .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms ease;
    }

    .pic.exit {
        opacity: 1;
    }
    .pic.exit-active {
        opacity: 0;
        transition: all 200ms ease;
    }
`

export default PictureWrapper
