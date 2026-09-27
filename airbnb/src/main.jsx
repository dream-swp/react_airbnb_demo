import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router"
import { Provider } from "react-redux"

import { ThemeProvider } from "@mui/material/styles"

import "@/assets/css/index.less"
import "normalize.css"
import theme from "./assets/theme"

import App from "@/App"
import store from "@/store"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Suspense fallback="loading...">
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </ThemeProvider>
            </Provider>
        </Suspense>
    </StrictMode>,
)
