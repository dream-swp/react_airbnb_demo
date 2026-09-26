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

    const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo: recommendInfo } = useSelector(
        (state) => ({
            goodPriceInfo: state.home.goodPriceInfo,
            highScoreInfo: state.home.highScoreInfo,
            discountInfo: state.home.discountInfo,
            recommendInfo: state.home.recommendInfo,
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
                <HomeSectionV1 data={goodPriceInfo} />
                <HomeSectionV1 data={highScoreInfo} />
            </div>
        </HomeWapper>
    )
})
export default Home
