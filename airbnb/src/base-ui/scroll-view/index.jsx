import { memo, useCallback, useEffect, useRef, useState } from "react"

import ScrollWrapper from "./style"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"

const ScrollView = memo((props) => {

    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(true)

    // 组件渲染完毕, 获取组件内容相关信息 ( 获取 总体宽度 / 滚动 宽度, 用于判断右侧按钮是否显示 )
    const scrollContentRef = useRef()

    // 使用 ref 存储是为了优化,保证 数据改变不需要重新执行刷新组件
    const totalDistanceRef = useRef()
    const posIndexRef = useRef(0)

    useEffect(() => {
        // 可以滚动的宽度
        const scrollWidth = scrollContentRef.current.scrollWidth
        // 本身占据的宽度
        const clientWidth = scrollContentRef.current.clientWidth
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance > 0)
    }, [props.children])


    // 点击按钮 左右 移动
    const controlClickHandle = useCallback((isRight) => {
        // 点击左侧按钮, 往右滚 - 1, 点击右侧按钮, 往左滚动 + 1.
        const posIndex = posIndexRef.current
        const newIndex = isRight ? posIndex + 1 : posIndex - 1
        const newElement = scrollContentRef.current.children[newIndex]

        // 获取控件距离父控件左侧的偏移量
        const newOffsetLeft = newElement.offsetLeft

        // 移动控件左侧移动
        scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`

        // 记录最新的索引, 方便移动下一个控件
        posIndexRef.current = newIndex

        // 判断是 左 / 右移按钮 ,是否可以显示
        setShowLeft(newOffsetLeft > 0)
        setShowRight(totalDistanceRef.current > newOffsetLeft)
    }, [])

    return (
        <ScrollWrapper>
            {showLeft && (
                <div className="control left" onClick={() => controlClickHandle(false)}>
                    <IconArrowLeft />
                </div>
            )}
            {showRight && (
                <div className="control right" onClick={() => controlClickHandle(true)}>
                    <IconArrowRight />
                </div>
            )}

            <div className="scroll">
                <div className="content" ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>
        </ScrollWrapper>
    )
})

export default ScrollView
