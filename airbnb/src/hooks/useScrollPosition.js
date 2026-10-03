import { useEffect, useState } from "react"
import { throttle } from "underscore"

export default function useScrollPosition() {
    const [scrolllX, setScrollX] = useState(0)
    const [scrolllY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = throttle(function () {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        }, 100)
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return { scrolllX, scrolllY }
}
