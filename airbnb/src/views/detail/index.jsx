import { memo, useEffect } from "react"
import PropTypes from "prop-types"

import DetailWapper from "./style"
import DetailPictures from "./c-cpns/detail-pictures"
import DetailInfo from "./c-cpns/detail-info"
import { useDispatch } from "react-redux"
import { changeHeaderConfigAction } from "@/store/modules/toolkit/mian"

const Detail = memo((props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeHeaderConfigAction({ isFixed: false }))
    }, [dispatch])

    return (
        <DetailWapper>
            <DetailPictures />
            <DetailInfo />
        </DetailWapper>
    )
})

Detail.propTypes = {}

export default Detail
