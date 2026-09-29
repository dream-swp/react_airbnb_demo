import { configureStore } from "@reduxjs/toolkit"

import homeReducer from "./modules/toolkit/home"
import entireReducer from "./modules/entire"

import detailReducer from "./modules/toolkit/detail"


const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer,
        detail: detailReducer,
    },
}) 

export default store
