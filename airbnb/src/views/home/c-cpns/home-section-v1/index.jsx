import { memo } from "react"
import PropTypes from "prop-types"

import SectionWrapperV1 from "./style"
import SectionHeader from "@/components/section-header"
import SectionRomms from "@/components/section-rooms"
import SectionFooter from "@/components/section-footer"


const HomeSectionV1 = memo((props) => {
    const { data } = props
    return (
        <SectionWrapperV1>
            <SectionHeader title={data.title} subTitle={data.subtitle} />
            <SectionRomms list={data.list} itemWidth="25%"/>
            <SectionFooter />
        </SectionWrapperV1>
    )
})

HomeSectionV1.propTypes = {
    data: PropTypes.object,
}

export default HomeSectionV1
