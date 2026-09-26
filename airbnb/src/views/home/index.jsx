import { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import { HomeWapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"
import { fetchHomeDataAction } from "@/store/modules/toolkit/home"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import HomeSectionV2 from "./c-cpns/home-section-v2"
import { isEmpty } from "@/utils"

const Home = memo((props) => {
    
    const dispatch = useDispatch()

    const { goodPriceInfo, highScoreData, discountData } = useSelector(
        (state) => ({
            goodPriceInfo: state.home.goodPriceInfo,
            highScoreData: state.home.highScoreData,
            discountData: state.home.discountData,
        }),
        shallowEqual,
    )

    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch])

    return (
        <HomeWapper>
            <HomeBanner />
            <div className="content">
                {isEmpty(discountData) && <HomeSectionV2 data={discountData} />}
                <HomeSectionV1 data={goodPriceInfo} />
                <HomeSectionV1 data={highScoreData} />
            </div>
        </HomeWapper>
    )
})
export default Home
