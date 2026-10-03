

import dsRequest from "..";

export function getEntireRoomListData(offset = 0, size = 20) {
    return dsRequest.get({
        url: "entire/list",
        params: {
            offset,
            size,
        },
    })
}