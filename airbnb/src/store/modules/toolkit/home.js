import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { geHomeGoodPriceData, getHomeDiscountData, getHomeHighScoreData } from "@/services"

export const fetchHomeDataAction = createAsyncThunk("fetchHomeDataAction", (payload, { dispatch }) => {
    geHomeGoodPriceData().then((res) => {
        dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighScoreData().then((res) => {
        dispatch(changHomeHighScoreDataAction(res))
    })

    getHomeDiscountData().then((res) => {
        dispatch(changeHomeDiscountDataAction(res))
    })
    
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScoreData: {},
        discountData: {},
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },

        changHomeHighScoreDataAction(state, { payload }) {
            state.highScoreData = payload
        },
        changeHomeDiscountDataAction(state, {payload} ) {
            state.discountData = payload
        }
    },
})

export const { 
    changeGoodPriceInfoAction, 
    changHomeHighScoreDataAction, 
    changeHomeDiscountDataAction,
} = homeSlice.actions

export default homeSlice.reducer
