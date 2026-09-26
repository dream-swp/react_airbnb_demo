import { memo, useCallback, useState } from "react"
import PropTypes from "prop-types"

import SectionWrapperV2 from "./style"

import SectionTabs from "@/components/section-tabs"
import SectionHeader from "@/components/section-header"
import SectionRomms from "@/components/section-rooms"
import SectionFooter from "@/components/section-footer"

const HomeSectionV2 = memo((props) => {
    const { data } = props

    const tabNames = data.dest_address?.map((item) => item.name)

    const initialName = Object.keys(data.dest_list)[0]
    const [name, setName] = useState(initialName)
    const tabCliclHandle = useCallback(
        (item, index) => {
            setName(item)
        },
        [name],
    )

    return (
        <SectionWrapperV2>
            <SectionHeader title={data.title} subTitle={data.subtitle} />
            <SectionTabs tabNames={tabNames} tabClick={tabCliclHandle} />
            <SectionRomms list={data.dest_list?.[name]} itemWidth="33.33%" />
            <SectionFooter name={name} />
        </SectionWrapperV2>
    )
})

HomeSectionV2.propTypes = {
    data: PropTypes.object,
}

export default HomeSectionV2
