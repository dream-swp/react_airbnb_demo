import { memo, useCallback } from "react"
import PropTypes from "prop-types"

import PreviewWrapper from "./style"

import IconTriangleBottom from "@/assets/svg/icon-triangle-bottom"
import IconTriangleTop from "@/assets/svg/icon-triangle-top"
import Indicator from "@/base-ui/indicator"
import classNames from "classnames"

const BrowserPreview = memo((props) => {
    
    const { info } = props
    
    const itmeClickHandle = useCallback((index) => {
        info?.itmeHandle?.(index)
    }, [info.currentIndex])


    const toggleClickHandle = useCallback(() => {
        info?.toggleHandle?.()
    }, [info.isHiddenIndicator])

    return (
        <PreviewWrapper $isHiddenIndicator={info.isHiddenIndicator}>
            <div className="preview">
                <div className="info">
                    <div className="desc">
                        <div className="count">
                            <span>
                                {info.currentIndex + 1} / {info.urls.length}
                            </span>
                            <span>room apartement 图片 {info.currentIndex + 1}</span>
                        </div>
                        <div className="toggle" onClick={() => toggleClickHandle()}>
                            <span className="content">
                                {info.isHiddenIndicator ? "隐藏" : "显示"}照片列表
                            </span>
                            {info.isHiddenIndicator ? <IconTriangleBottom /> : <IconTriangleTop />}
                        </div>
                    </div>
                    <div className="list">
                        <Indicator selectIndex={info.currentIndex}>
                            {info.urls.map((item, index) => {
                                return (
                                    <div
                                        className={classNames("item", {
                                            active: info.currentIndex == index,
                                        })}
                                        key={item}
                                        onClick={() => itmeClickHandle(index)}
                                    >
                                        <img src={item} alt="" />
                                    </div>
                                )
                            })}
                        </Indicator>
                    </div>
                </div>
            </div>
        </PreviewWrapper>
    )
})

BrowserPreview.propTypes = {
    info: {
        urls: PropTypes.array,
        isHiddenIndicator: PropTypes.bool,
        currentIndex: PropTypes.number,
        itmeHandle: PropTypes.func,
        toggleHandle: PropTypes.func,
    },
}
export default BrowserPreview
