import { memo } from "react"
import PropTypes from "prop-types"

import SectionWrapperV3 from "./style"
import SectionHeader from "@/components/section-header"
import ScrollView from "@/base-ui/scroll-view"
import RoomItem from "@/components/room-item"

const HomeSectionV3 = memo((props) => {
    const { data } = props
    return (
        <SectionWrapperV3>
            <SectionHeader title={data.title} subTitle={data.subtitle} />
            <div className="room-list">
               <ScrollView>
                 {
                    data.list.map(item => {
                        return <RoomItem item={item} width="20%" key={item.id}/>
                    })
                }
               </ScrollView>
            </div>
            
        </SectionWrapperV3>
    )
})

HomeSectionV3.propTypes = {
    data: PropTypes.object,
}

export default HomeSectionV3
