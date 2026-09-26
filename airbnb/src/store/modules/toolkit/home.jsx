import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { geHomeGoodPriceData } from "@/services"

export const fetchHomeDataAction = createAsyncThunk("fetchHomeDataAction", async (payload) => {
    return await geHomeGoodPriceData()
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeDataAction.pending, (state) => {})
            .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.goodPriceInfo = payload
            })
            .addCase(fetchHomeDataAction.rejected, (state, { payload }) => {
                console.log(action.error.message)
            })
    },
})

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer
