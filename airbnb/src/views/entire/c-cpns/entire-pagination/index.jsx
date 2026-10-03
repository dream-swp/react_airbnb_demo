import { memo, useCallback } from "react"
import PropTypes from "prop-types"

import Pagination from "@mui/material/Pagination"

import PaginationWrapper from "./style"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators"

const EntirePagination = memo((props) => {
    const { totalCount, currentPage, roomList } = useSelector(
        (state) => ({
            totalCount: state.entire.totalCount,
            currentPage: state.entire.currentPage,
            roomList: state.entire.roomList,
        }),
        shallowEqual,
    )

    const totalPage = Math.ceil(totalCount / 20)
    const startCount = currentPage * 20 + 1
    const endCount = (currentPage + 1) * 20

    const dispatch = useDispatch()
    const pagChangeHandle = useCallback((event, pageCount) => {
        window.scrollTo(0, 0)
        dispatch(fetchRoomListAction(pageCount - 1))
    }, [currentPage])

    return (
        <PaginationWrapper>
            {!!roomList.length && (
                <div className="info">
                    <Pagination count={totalPage} onChange={pagChangeHandle}/>
                    <div className="desc">
                        第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
                    </div>
                </div>
            )}
        </PaginationWrapper>
    )
})

EntirePagination.propTypes = {}

export default EntirePagination
