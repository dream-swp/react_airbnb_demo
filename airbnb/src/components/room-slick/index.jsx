import { memo, useCallback, useRef, useState } from "react"
import PropTypes from "prop-types"
import { Carousel } from "antd"
import classNames from "classnames"

import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import Indicator from "@/base-ui/indicator"

import SlickWapper from "./style"

const RoomSlick = memo((props) => {
    const { itmes = [] } = props

    const [selectIndex, setSelectIndex] = useState(0)

    const slickRef = useRef()

    const controlClickHandle = useCallback(
        (event, isRight) => {
            event.stopPropagation()
            isRight ? slickRef.current.next() : slickRef.current.prev()

            let index = isRight ? selectIndex + 1 : selectIndex - 1
            const length = itmes.length
            if (index < 0) {
                index = length - 1
            }

            if (index > length - 1) {
                index = 0
            }
            setSelectIndex(index)
        },
        [selectIndex],
    )

    return (
        <SlickWapper>
            <div className="slick">
                <div className="control">
                    <div className="button left" onClick={(e) => controlClickHandle(e, false)}>
                        <IconArrowLeft width={20} height={20} />
                    </div>
                    <div className="button right" onClick={(e) => controlClickHandle(e, true)}>
                        <IconArrowRight width={20} height={20} />
                    </div>
                </div>
                <div className="indicator">
                    <Indicator selectIndex={selectIndex}>
                        {itmes?.map((item, index) => {
                            return (
                                <div className="item" key={item}>
                                    <span
                                        className={classNames("dot", {
                                            active: selectIndex == index,
                                        })}
                                    ></span>
                                </div>
                            )
                        })}
                    </Indicator>
                </div>
                <Carousel dots={false} ref={slickRef}>
                    {itmes?.map((item, index) => {
                        return (
                            <div className="cover" key={item}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </SlickWapper>
    )
})

RoomSlick.propTypes = {
    itmes: PropTypes.array,
}

export default RoomSlick
