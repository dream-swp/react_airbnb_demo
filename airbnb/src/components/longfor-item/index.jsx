import { memo } from "react"
import PropTypes from "prop-types"

import ItemWapper from "./style"

const LongforItme = memo((props) => {
    const { item } = props

    return (
        <ItemWapper>
            <div className="inner">
                <div className="item-info">
                    <img className="cover" src={item.picture_url} alt="" />
                    <div className="bg-cover"></div>
                    <div className="info">
                        <div className="city">{item.city}</div>
                        <div className="price">均价{item.price}</div>
                    </div>
                </div>
            </div>
        </ItemWapper>
    )
})

LongforItme.propTypes = {
    item: PropTypes.object,
}

export default LongforItme
