import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"],
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@mui/styled-engine": "@mui/styled-engine-sc",
        },
    },
})
