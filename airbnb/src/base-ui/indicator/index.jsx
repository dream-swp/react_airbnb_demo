import { memo, useEffect, useRef } from "react"
import PropTypes from "prop-types"

import IndicatorWapper from "./style"

const Indicator = memo((props) => {
    const { selectIndex = 0 } = props

    const contentRef = useRef()
    useEffect(() => {
        const selectItemEl = contentRef.current.children[selectIndex]
        const selectItemWidth = selectItemEl.clientWidth
        const selectItemOffset = selectItemEl.offsetLeft
        const scrollElWidth = contentRef.current.clientWidth
        const scrollElScroll = contentRef.current.scrollWidth

        let distance = selectItemWidth * 0.5 + selectItemOffset - scrollElWidth * 0.5
        if (distance < 0) distance = 0
        if (distance > scrollElScroll - scrollElWidth) distance = scrollElScroll - scrollElWidth
        contentRef.current.style.transform = `translate(${-distance}px)`
    }, [selectIndex])

    return (
        <IndicatorWapper>
            <div className="i-content" ref={contentRef}>
                {props.children}
            </div>
        </IndicatorWapper>
    )
})

Indicator.propTypes = {
    selectIndex: PropTypes.number,
}

export default Indicator
