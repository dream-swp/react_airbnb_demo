import { memo } from "react"
import PropTypes from "prop-types"

import HeaderWapper from "./style"

const SectionHeader = memo((props) => {
    const { title, subTitle } = props
    return (
        <HeaderWapper>
            <h2 className="title">{title}</h2>
            {subTitle && (<div className="sub-title">{subTitle}</div>)}
        </HeaderWapper>
    )
})

SectionHeader.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default SectionHeader
