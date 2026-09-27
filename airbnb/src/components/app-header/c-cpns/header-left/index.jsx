import { memo, useCallback } from "react"
import { LeftWrapper } from "./style"
import IconLogo from "@/assets/svg/icon-logo"
import { useNavigate } from "react-router"
const HeaderLeft = memo((props) => {

    const navigate = useNavigate()

    const logoClickHandle = useCallback(() => {
        navigate("/home")
    }, [])
    
    return (
        <LeftWrapper>
            <div className="logo" onClick={logoClickHandle}>
                <IconLogo />
            </div>
        </LeftWrapper>
    )
})
export default HeaderLeft
