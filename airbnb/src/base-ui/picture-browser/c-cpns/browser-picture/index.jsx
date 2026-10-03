import { memo, useRef } from "react"
import PropTypes from "prop-types"

import PictureWrapper from "./style"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import { SwitchTransition, CSSTransition } from "react-transition-group"

const BrowserPicture = memo((props) => {
    const { info } = props
    const imgRef = useRef()

    return (
        <PictureWrapper $isNext={info.isNext}>
            <div className="control">
                <div className="left btn" onClick={() => info?.controlHandle?.(false)}>
                    <IconArrowLeft width={77} height={77} />
                </div>
                <div className="right btn" onClick={() => info?.controlHandle?.(true)}>
                    <IconArrowRight width={77} height={77} />
                </div>
            </div>
            <div className="picture">
                <SwitchTransition mode="in-out">
                    <CSSTransition key={info.url} classNames="pic" timeout={200} nodeRef={imgRef}>
                        <img src={info.url} alt="" ref={imgRef} />
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </PictureWrapper>
    )
})

BrowserPicture.propTypes = {
    info: {
        url: PropTypes.string,
        currentIndex: PropTypes.number,
        isNext: PropTypes.bool,
        controlHandle: PropTypes.func,
    },
}
export default BrowserPicture
