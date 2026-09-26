import { memo } from "react"
import { useRoutes } from "react-router"

import router from "@/router"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"

const App = memo((props) => {
    return (
        <div className="app">
            <AppHeader />
            <div className="page">{useRoutes(router)}</div>
            <AppFooter />
        </div>
    )
})
export default App
