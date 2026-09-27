import { getEntireRoomListData } from "@/services/modules/entire"
import * as actionTypes from "./constants"

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage,
})

export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList,
})

export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount,
})

export const fetchRoomListAction = () => {
    return async (dispatch, getState) => {
        
        const currentPage = getState().entire.currentPage * 20
        const res = await getEntireRoomListData(currentPage)
        dispatch(changeRoomListAction(res.list))
        dispatch(changeTotalCountAction(res.totalCount))
    }
}
