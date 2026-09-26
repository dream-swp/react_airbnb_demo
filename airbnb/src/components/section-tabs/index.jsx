import { memo, useState } from "react"
import PropTypes from "prop-types"
import TabsWrapper from "./style"
import classNames from "classnames"

const SectionTabs = memo((props) => {
    const { tabNames = [], tabClick } = props

    const [currentIndex, setCurrentIndex] = useState(0)

    function itmeClickHandle(item, index) {
        setCurrentIndex(index)
        tabClick(item, index)
    }

    return (
        <TabsWrapper>
            {tabNames.map((item, index) => {
                return (
                    <div
                        className={classNames("item", { active: index === currentIndex })}
                        key={item}
                        onClick={() => itmeClickHandle(item, index)}
                    >
                        {item}
                    </div>
                )
            })}
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array,
}

export default SectionTabs
