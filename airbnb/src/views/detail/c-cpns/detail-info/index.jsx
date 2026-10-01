import { memo } from "react"
import PropTypes from "prop-types"

import InfoWapper from "./style"

const DetailInfo = memo((props) => {
    return (
        <InfoWapper>
            <span></span>
        </InfoWapper>
    )
})

DetailInfo.propTypes = {
    
}

export default DetailInfo
