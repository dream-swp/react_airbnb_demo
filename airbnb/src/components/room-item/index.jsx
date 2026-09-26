import { memo } from "react"
import PropTypes from "prop-types"

import ItemWapper from "./style"
import Rating from "@mui/material/Rating"

const RoomItem = memo((props) => {
    const { item } = props

    console.log(item.name)
    return (
        <ItemWapper $verifyColor={item.verify_info.text_color || "#39576a"}>
            <div className="inner">
                <div className="cover">
                    <img src={item.picture_url} alt="" />
                </div>

                <div className="desc">{item.verify_info.messages.join("﹒")}</div>

                <div className="name">{item.name}</div>
                <div className="price">¥{item.price}/晚</div>
                <div className="bottom">
                    <Rating
                        name="read-only"
                        value={item.star_rating ?? 1.4}
                        precision={0.1}
                        readOnly
                        sx={{ fontSize: "12px", color: "#00848A" }}
                    />
                    <span className="count">{item.reviews_count}</span>
                   {
                     item?.bottom_info?.content && <span className="extra">﹒{item?.bottom_info?.content}</span>
                   }
                </div>
            </div>
        </ItemWapper>
    )
})

RoomItem.propTypes = {
    item: PropTypes.object,
}

export default RoomItem
