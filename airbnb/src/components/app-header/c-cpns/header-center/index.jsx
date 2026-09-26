import { memo } from "react"
import { ConterWrapper } from "./style"
import IconSearchBar from "@/assets/svg/icon-search-bar"
const HeaderCenter = memo((props) => {
    return (
        <ConterWrapper>
            <div className="search-bar">
                <div className="text">搜索房源和体验</div>
                <span className="icon">
                    <IconSearchBar />
                </span>
            </div>
        </ConterWrapper>
    )
})
export default HeaderCenter
