import { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import { isEmpty } from "@/utils"

import { fetchHomeDataAction } from "@/store/modules/toolkit/home"

import { HomeWapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import HomeSectionV2 from "./c-cpns/home-section-v2"
import HomeLongfor from "./c-cpns/home-longfor"
import HomeSectionV3 from "./c-cpns/home-section-v3"

const Home = memo((props) => {
    const dispatch = useDispatch()

    const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } =
        useSelector(
            (state) => ({
                goodPriceInfo: state.home.goodPriceInfo,
                highScoreInfo: state.home.highScoreInfo,
                discountInfo: state.home.discountInfo,
                recommendInfo: state.home.recommendInfo,
                longforInfo: state.home.longforInfo,
                plusInfo: state.home.plusInfo,
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
                {isEmpty(discountInfo) && <HomeSectionV2 data={discountInfo} />}
                {isEmpty(recommendInfo) && <HomeSectionV2 data={recommendInfo} />}

                {isEmpty(longforInfo) && <HomeLongfor data={longforInfo} />}

                {isEmpty(goodPriceInfo) && <HomeSectionV1 data={goodPriceInfo} />}
                {isEmpty(highScoreInfo) && <HomeSectionV1 data={highScoreInfo} />}
                {isEmpty(plusInfo) && <HomeSectionV3 data={plusInfo} />}
            </div>
        </HomeWapper>
    )
})
export default Home
