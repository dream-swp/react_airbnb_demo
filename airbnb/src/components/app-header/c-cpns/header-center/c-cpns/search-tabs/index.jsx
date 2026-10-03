import { memo, useCallback, useState } from "react"
import PropTypes from "prop-types"

import TabWrapper from "./style"
import classNames from "classnames"

const SearchTabs = memo((props) => {
    const { titles, tabClick } = props

    const [currentIndex, setCurrentIndex] = useState(0)

    const itemClickHandle = useCallback(
        (index) => {
            setCurrentIndex(index)
            tabClick?.(index)
            console.log(index)
        },
        [currentIndex],
    )

    return (
        <TabWrapper>
            {titles.map((item, index) => {
                return (
                    <div
                        className={classNames("item", { active: currentIndex === index })}
                        key={item}
                        onClick={() => itemClickHandle(index)}
                    >
                        <span className="text">{item}</span>
                        <span className="bottom"></span>
                    </div>
                )
            })}
        </TabWrapper>
    )
})

SearchTabs.propTypes = {
    titles: PropTypes.array,
}

export default SearchTabs
