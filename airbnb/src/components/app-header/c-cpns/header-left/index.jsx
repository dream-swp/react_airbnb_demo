import { memo, useCallback, useContext } from "react"
import { LeftWrapper } from "./style"
import IconLogo from "@/assets/svg/icon-logo"
import { useNavigate } from "react-router"
import { useTheme } from "@mui/material"

const HeaderLeft = memo((props) => {
    const navigate = useNavigate()

    const logoClickHandle = useCallback(() => {
        navigate("/home")
    }, [])
    const { isAlpha } = useTheme()
    return (
        <LeftWrapper>
            <div className="logo" onClick={logoClickHandle}>
                <IconLogo color={isAlpha ? "#FFF" : "#FF385C"} />
            </div>
        </LeftWrapper>
    )
})
export default HeaderLeft
