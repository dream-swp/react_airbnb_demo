import { memo, useEffect, useState } from "react"
import { RightWrapper } from "./style"
import IconGlobal from "@/assets/svg/icon-global"
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar"
import IconProfileMenu from "@/assets/svg/icon-profile-menu"

const HeaderRight = memo((props) => {
    const [panel, setPanel] = useState(false)

    function profileClickHandle(event) {
        setPanel(!panel)
    }

    useEffect(() => {
        function windowHandle() {
            setPanel(false)
        }
        window.addEventListener("click", windowHandle, true)
        return () => {
            window.removeEventListener("click", windowHandle, true)
        }
    }, [])

    return (
        <RightWrapper>
            <div className="buttons">
                <span className="button">登录</span>
                <span className="button">注册</span>
                <span className="button">
                    <IconGlobal />
                </span>
            </div>
            <div className="profile" onClick={profileClickHandle}>
                <IconProfileMenu />
                <IconProfileAvatar />

                {panel && (
                    <div className="panel">
                        <div className="top">
                            <div className="item register">注册</div>
                            <div className="item logind">登录</div>
                        </div>
                        <div className="bottom">
                            <div className="item">出租房源</div>
                            <div className="item">开展体验</div>
                            <div className="item">帮助</div>
                        </div>
                    </div>
                )}
            </div>
        </RightWrapper>
    )
})
export default HeaderRight
