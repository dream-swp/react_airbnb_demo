import { memo, useState } from "react"

import { ConterWrapper } from "./style"

import IconSearchBar from "@/assets/svg/icon-search-bar"

import SearchTitles from "@/assets/data/search_titles.json"
import SearchTabs from "./c-cpns/search-tabs"
import SearchSection from "./c-cpns/search-section"

const HeaderCenter = memo((props) => {
    const { isSearch, searchBarClick } = props
    const titles = SearchTitles.map((item) => item.title)
    const [tabIndex, setTabIndex] = useState(0)

    function searchBarClickHandle() {
        searchBarClick?.()
    }

    return (
        <ConterWrapper>
            {!isSearch ? (
                <div className="search-bar" onClick={() => searchBarClickHandle()}>
                    <div className="text">搜索房源和体验</div>
                    <span className="icon">
                        <IconSearchBar />
                    </span>
                </div>
            ) : (
                <div className="search-detail">
                    <SearchTabs titles={titles} tabClick={setTabIndex} />
                    <div className="infos">
                        <SearchSection searchInfos={SearchTitles[tabIndex].searchInfos} />
                    </div>
                </div>
            )}
        </ConterWrapper>
    )
})
export default HeaderCenter
