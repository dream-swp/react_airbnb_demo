import { configureStore } from "@reduxjs/toolkit"

import mainSlice from "./modules/toolkit/mian"
import homeReducer from "./modules/toolkit/home"
import detailReducer from "./modules/toolkit/detail"

import entireReducer from "./modules/entire"

const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer,
        detail: detailReducer,
        main: mainSlice,
    },
})

export default store
