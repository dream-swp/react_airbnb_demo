import { memo, useCallback, useEffect, useState } from "react"
import PropTypes from "prop-types"

import BrowserWrapper from "./style"

import BrowserClose from "./c-cpns/browser-close"
import BrowserPicture from "./c-cpns/browser-picture"
import BrowserPreview from "./c-cpns/browser-preview"

const PictureBrowser = memo((props) => {
    const { info } = props

    const [currentIndex, setCurrentIndex] = useState(info.currentIndex)
    const [isNext, setIsNext] = useState(true)
    const [showList, setShowList] = useState(true)

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    const closeClickHandle = useCallback(() => {
        info?.closeHandle?.()
    }, [])

    const controlHandle = useCallback(
        (isNext) => {
            let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
            const length = info.pictureUrls.length

            if (newIndex < 0) {
                newIndex = length - 1
            }
            if (newIndex > length - 1) {
                newIndex = 0
            }
            setCurrentIndex(newIndex)
            setIsNext(isNext)
        },
        [isNext, currentIndex],
    )

    const itmeClickHandle = useCallback(
        (index) => {
            setIsNext(index > currentIndex)
            setCurrentIndex(index)
        },
        [isNext, currentIndex],
    )

    return (
        <BrowserWrapper $isNext={isNext} $showList={showList}>
            <BrowserClose
                info={{
                    closeHandle: closeClickHandle,
                }}
            />

            <BrowserPicture
                info={{
                    url: info.pictureUrls[currentIndex],
                    currentIndex: currentIndex,
                    isNext: isNext,
                    controlHandle: controlHandle,
                }}
            />

            <BrowserPreview
                info={{
                    urls: info.pictureUrls,
                    isHiddenIndicator: showList,
                    currentIndex: currentIndex,
                    itmeHandle: (index) => itmeClickHandle(index),
                    toggleHandle: () => setShowList(!showList),
                }}
            />
        </BrowserWrapper>
    )
})

PictureBrowser.propTypes = {
    info: {
        pictureUrls: PropTypes.array,
        currentIndex: PropTypes.number,
        closeHandle: PropTypes.func,
    },
}

export default PictureBrowser
