import { memo } from "react"
import PropTypes from "prop-types"

import RoomsWrapper from "./style"
import { shallowEqual, useSelector } from "react-redux"
import RoomItem from "@/components/room-item"

const EntireRooms = memo((props) => {
    const { roomList, totalCount } = useSelector(
        (state) => ({
            roomList: state.entire.roomList,
            totalCount: state.entire.totalCount,
        }),
        shallowEqual,
    )

    return (
        <RoomsWrapper>
            <span className="title">{totalCount}多处住宿</span>
            <div className="list">
                {roomList.map((item) => {
                    return <RoomItem item={item} itemWidth="20%" key={item.id} />
                })}
            </div>
        </RoomsWrapper>
    )
})

EntireRooms.propTypes = {}

export default EntireRooms
