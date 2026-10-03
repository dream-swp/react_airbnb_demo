import { memo } from "react"
import PropTypes from "prop-types"

import LongforWrapper from "./style"
import SectionHeader from "@/components/section-header"
import SectionFooter from "@/components/section-footer"
import LongforItme from "@/components/longfor-item"
import ScrollView from "@/base-ui/scroll-view"

const HomeLongfor = memo((props) => {
    const { data } = props

    return (
        <LongforWrapper>
            <SectionHeader title={data.title} subTitle={data.subtitle} />
            <ScrollView>
                {data.list.map((item) => {
                    return <LongforItme item={item} key={item.city}/>
                })}
            </ScrollView>
        </LongforWrapper>
    )
})
 
HomeLongfor.propTypes = {
    data: PropTypes.object,
}

export default HomeLongfor
