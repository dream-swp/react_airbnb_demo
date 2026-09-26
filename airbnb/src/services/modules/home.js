import dsRequest from ".."

export function geHomeGoodPriceData() {
    return dsRequest.get({
        url: "/home/goodprice",
    })
}

export function getHomeHighScoreData() {
    return dsRequest.get({
        url: "/home/highscore",
    })
}

export function getHomeDiscountData() {
    return dsRequest.get({
        url: "home/discount",
    })
}

export function getHomeHotRecommendData() {
    return dsRequest.get({
        url: "home/hotrecommenddest"
    })
}
