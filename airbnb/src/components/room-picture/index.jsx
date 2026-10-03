import { memo } from "react"
import PropTypes from "prop-types"
import PictureWapper from "./style"

const RoomPicture = memo((props) => {

    const {url} = props

    return (
        <PictureWapper>
            <div className="cover">
                <img src={url} alt="" />
            </div>
        </PictureWapper>
    )
})

RoomPicture.propTypes = {
    url: PropTypes.string
}

export default RoomPicture
