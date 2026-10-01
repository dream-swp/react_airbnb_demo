import { memo } from "react"
import PropTypes from "prop-types"

import DetailWapper from "./style"
import DetailPictures from "./c-cpns/detail-pictures"
import DetailInfo from "./c-cpns/detail-info"

const Detail = memo((props) => {
    return (
        <DetailWapper>
            <DetailPictures />
            <DetailInfo />
        </DetailWapper>
    )
})

Detail.propTypes = {}

export default Detail
