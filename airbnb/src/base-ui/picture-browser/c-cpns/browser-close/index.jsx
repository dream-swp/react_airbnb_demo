import { memo, useCallback } from "react"
import PropTypes from "prop-types"
import CloseWapper from "./style"
import IconClose from "@/assets/svg/icon-close"

const BrowserClose = memo((props) => {
    const { info } = props

    const clickHandle = useCallback(() => {
        info?.closeHandle?.()
    }, [])

    return (
        <CloseWapper>
            <div className="close">
                <div className="close-btn" onClick={() => clickHandle()}>
                    <IconClose />
                </div>
            </div>
        </CloseWapper>
    )
})

BrowserClose.propTypes = {
    info: {
        closeHandle: PropTypes.func,
    },
}

export default BrowserClose
