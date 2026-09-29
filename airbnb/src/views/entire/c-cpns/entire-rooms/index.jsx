import { memo, useCallback } from "react"

import RoomsWrapper from "./style"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import RoomItem from "@/components/room-item"
import { useNavigate } from "react-router"
import { changeDetailInfoAction } from "@/store/modules/toolkit/detail"

const EntireRooms = memo((props) => {
    const { roomList, totalCount, isLoading } = useSelector(
        (state) => ({
            roomList: state.entire.roomList,
            totalCount: state.entire.totalCount,
            isLoading: state.entire.isLoading,
        }),
        shallowEqual,
    )

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const itemClickHandle = useCallback((item) => {
        navigate("/detail")
        dispatch(changeDetailInfoAction(item))
    }, [navigate])

    return (
        <RoomsWrapper>
            <span className="title">{totalCount}多处住宿</span>
            <div className="list">
                {roomList.map((item) => {
                    return (
                        <RoomItem
                            item={item}
                            itemWidth="20%"
                            key={item._id}
                            itemClick={itemClickHandle}
                        />
                    )
                })}
            </div>
            {isLoading && <div className="cover"></div>}
        </RoomsWrapper>
    )
})

export default EntireRooms
