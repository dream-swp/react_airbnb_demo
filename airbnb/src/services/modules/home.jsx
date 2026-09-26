import dsRequest from ".."

export function geHomeGoodPriceData() {
    return dsRequest.get({
        url: "/home/goodprice",
    })
}
