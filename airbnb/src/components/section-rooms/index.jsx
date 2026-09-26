import { memo } from "react"
import PropTypes from "prop-types"
import RoomItem from "@/components/room-item"
import RoomsWrapper from "./style"

const SectionRomms = memo((props) => {
    const { list = [], itemWidth } = props

    return (
        <RoomsWrapper>
            {list.slice(0, 8)?.map((item) => {
                return <RoomItem itemWidth={itemWidth} item={item} key={item.id} />
            })}
        </RoomsWrapper>
    )
})

SectionRomms.propTypes = {
    list: PropTypes.array,
}

export default SectionRomms
