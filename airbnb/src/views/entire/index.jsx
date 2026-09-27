import { memo, useEffect } from "react"
import PropTypes from "prop-types"

import EntireWrapper from "./style"
import EntireFilter from "./c-cpns/entire-filter"
import EntireRooms from "./c-cpns/entire-rooms"
import EntirePagination from "./c-cpns/entire-pagination"

import { useDispatch } from "react-redux"
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators"

const Entire = memo((props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchRoomListAction())
    }, [dispatch])
    return (
        <EntireWrapper>

            <EntireFilter />
            <EntireRooms/>
            <EntirePagination/> 
            
        </EntireWrapper>
    )
})

Entire.propTypes = {}

export default Entire
