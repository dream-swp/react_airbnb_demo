import { memo, useCallback, useState } from "react"
import PropTypes from "prop-types"

import TabsWrapper from "./style"
import classNames from "classnames"
import ScrollView from "@/base-ui/scroll-view"

const SectionTabs = memo((props) => {
    const { tabNames = [], tabClick } = props

    const [currentIndex, setCurrentIndex] = useState(0)

    const itmeClickHandle = useCallback((item, index) => {
        setCurrentIndex(index)
        tabClick(item, index)
    }, [])

    return (
        <TabsWrapper>
            <ScrollView>
                {tabNames.map((item, index) => {
                    return (
                        <div
                            className={classNames("item", { active: index === currentIndex })}
                            key={index}
                            onClick={() => itmeClickHandle(item, index)}
                        >
                            {item}
                        </div>
                    )
                })}
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array,
}

export default SectionTabs
