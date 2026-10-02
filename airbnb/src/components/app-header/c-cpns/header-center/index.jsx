import { memo, useCallback, useRef, useState } from "react"

import { CenterWrapper } from "./style"

import { CSSTransition } from "react-transition-group"

import IconSearchBar from "@/assets/svg/icon-search-bar"

import SearchTitles from "@/assets/data/search_titles.json"
import SearchTabs from "./c-cpns/search-tabs"
import SearchSection from "./c-cpns/search-section"

const HeaderCenter = memo((props) => {
    const { isSearch, searchBarClick } = props
    const titles = SearchTitles.map((item) => item.title)
    const [tabIndex, setTabIndex] = useState(0)

    const searchBarRef = useRef()
    const searchDetailRef = useRef()
    
    const searchBarClickHandle = useCallback(() => {
        searchBarClick?.()
    }, [isSearch])

    return (
        <CenterWrapper>
            <CSSTransition
                in={!isSearch}
                classNames="bar"
                timeout={250}
                unmountOnExit={true}
                nodeRef={searchBarRef}
            >
                <div
                    className="search-bar"
                    onClick={() => searchBarClickHandle()}
                    ref={searchBarRef}
                >
                    <div className="text">搜索房源和体验</div>
                    <span className="icon">
                        <IconSearchBar />
                    </span>
                </div>
            </CSSTransition>

            <CSSTransition
                in={isSearch}
                classNames="detail"
                timeout={250}
                unmountOnExit={true}
                nodeRef={searchDetailRef}
            >
                <div className="search-detail" ref={searchDetailRef}>
                    <SearchTabs titles={titles} tabClick={setTabIndex} />
                    <div className="infos">
                        <SearchSection searchInfos={SearchTitles[tabIndex].searchInfos} />
                    </div>
                </div>
            </CSSTransition>
        </CenterWrapper>
    )
})
export default HeaderCenter
