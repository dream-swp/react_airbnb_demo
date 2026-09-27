import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import {
    geHomeGoodPriceData,
    getHomeDiscountData,
    getHomeHighScoreData,
    getHomeHotRecommendData,
    getHomeLongforData,
} from "@/services"

export const fetchHomeDataAction = createAsyncThunk(
    "fetchHomeDataAction",
    (payload, { dispatch }) => {
        geHomeGoodPriceData().then((res) => {
            dispatch(changeGoodPriceInfoAction(res))
        })

        getHomeHighScoreData().then((res) => {
            dispatch(changHighScoreInfoAction(res))
        })

        getHomeDiscountData().then((res) => {
            dispatch(changeDiscountInfoAction(res))
        })

        getHomeHotRecommendData().then((res) => {
            dispatch(changeRecommendInfoAction(res))
        })

        getHomeLongforData().then((res) => {
            dispatch(changeLongforInfoAction(res))
        })
    },
)

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        longforInfo: {},
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },

        changHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state, { payload }) {
            state.longforInfo = payload
        },
    },
})

export const {
    changeGoodPriceInfoAction,
    changHighScoreInfoAction,
    changeDiscountInfoAction,
    changeRecommendInfoAction,
    changeLongforInfoAction,
} = homeSlice.actions

export default homeSlice.reducer
