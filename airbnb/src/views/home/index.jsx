import { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import { HomeWapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"
import { fetchHomeDataAction } from "@/store/modules/toolkit/home"
import SectionHeader from "@/components/section-header"
import RoomItem from "@/components/room-item"
import SectionRomms from "@/components/section-rooms"


const Home = memo((props) => {
    const dispatch = useDispatch()

    const { goodPriceInfo } = useSelector(
        (state) => ({
            goodPriceInfo: state.home.goodPriceInfo,
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
               <div className="good-price">
                    <SectionHeader title={goodPriceInfo.title}/>
                    <SectionRomms list={goodPriceInfo.list} />
               </div>
            </div>
        </HomeWapper>
    )
})
export default Home
