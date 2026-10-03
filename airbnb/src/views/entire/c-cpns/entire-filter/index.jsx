import { memo, useCallback, useState } from "react"
import PropTypes from "prop-types"

import FilterWapper from "./style"

import filterData from "@/assets/data/filter_data.json"
import classNames from "classnames"

const EntireFilter = memo((props) => {
    const [selectItems, setSelectItems] = useState([])

    const itmeClickHandle = useCallback(
        (item, index) => {
            let newItems = [...selectItems]
            if (newItems.includes(item)) {
                newItems = newItems.filter((iten) => item !== iten)
            } else {
                newItems.push(item)
            }
            setSelectItems(newItems)
        },
        [selectItems],
    )

    return (
        <FilterWapper>
            <div className="filter">
                {filterData.map((item, index) => {
                    return (
                        <div
                            className={classNames("item", { active: selectItems.includes(item) })}
                            onClick={() => itmeClickHandle(item, index)}
                            key={item}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
        </FilterWapper>
    )
})

EntireFilter.propTypes = {}

export default EntireFilter
