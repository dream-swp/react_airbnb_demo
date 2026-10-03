import { memo, useState } from "react"
import PropTypes from "prop-types"

import PicturesWrapper from "./style"
import { shallowEqual, useSelector } from "react-redux"
import PictureBrowser from "@/base-ui/picture-browser"

const DetailPictures = memo((props) => {

    const [showBrowser, setShowBrowser] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const { detailInfo } = useSelector(
        (state) => ({
            detailInfo: state.detail.detailInfo,
        }),
        shallowEqual,
    )

    function itemClickHandle(isDisplay, index) {
        setShowBrowser(isDisplay)
        setCurrentIndex(index)
    }

    return (
        <PicturesWrapper>
            <div className="pictures">
                <div className="left">
                    <div className="item" onClick={() => itemClickHandle(true, 0)}>
                        <img src={detailInfo?.picture_urls?.[0]} alt="" />
                        <div className="cover"></div>
                    </div>
                </div>
                <div className="right">
                    {detailInfo?.picture_urls?.slice(1, 5).map((item, index) => {
                        return (
                            <div
                                className="item"
                                key={item}
                                onClick={() => itemClickHandle(true, index + 1)}
                            >
                                <img src={item} alt="" />
                                <div className="cover"></div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="show-btn" onClick={() => itemClickHandle(true, 0)}>
                显示照片
            </div>
            {showBrowser && (
                <PictureBrowser
                    info={{
                        pictureUrls: detailInfo.picture_urls,
                        currentIndex: currentIndex,
                        closeHandle: () => setShowBrowser(false),
                    }}
                />
            )}
        </PicturesWrapper>
    )
})

DetailPictures.propTypes = {}

export default DetailPictures
