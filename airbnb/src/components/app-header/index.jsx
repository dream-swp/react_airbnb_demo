import { memo, useRef, useState } from "react"

import { HeaderWrapper, SearchAreaWrapper } from "./style"
import HeaderLeft from "./c-cpns/header-left"
import HeaderCenter from "./c-cpns/header-center"
import HeaderRight from "./c-cpns/header-right"
import { shallowEqual, useSelector } from "react-redux"
import classNames from "classnames"
import { useScrollPosition } from "@/hooks"

const AppHeader = memo((props) => {
    const [isSearch, setIsSearch] = useState(false)

    const { headerConfig } = useSelector(
        (state) => ({
            headerConfig: state.main.headerConfig,
        }),
        shallowEqual,
    )

    const { isFixed } = headerConfig

    const { scrolllY } = useScrollPosition()

    const prevY = useRef(0)
    if (!isSearch) {
        prevY.current = scrolllY
    }

    // 使用ref, ref 在组件的声明周期中保持一份, 滚动的 Y - 记录之 > 30 隐藏搜索
    // 使用 绝对值, 向上滚动, 和向下滚动
    if (isSearch && Math.abs(scrolllY - prevY.current) > 30) {
        setIsSearch(false)
    }

    return (
        <HeaderWrapper className={classNames({ fixed: isFixed })}>
            <div className="content">
                <div className="top">
                    <HeaderLeft />
                    <HeaderCenter isSearch={isSearch} searchBarClick={() => setIsSearch(true)} />
                    <HeaderRight />
                </div>
                <SearchAreaWrapper className="search-area" $isSearch={isSearch} />
            </div>

            {isSearch && <div className="cover" onClick={() => setIsSearch(false)}></div>}
        </HeaderWrapper>
    )
})
export default AppHeader
