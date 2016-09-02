
export function fetchDetail() {

    return (dispatch, getState) => {
        let imgArray = [
            'http://tupian.enterdesk.com/2013/lxy/07/27/6/1.jpg',
            'http://bizhi.zhuoku.com/wall/jie/20070409/huoying/113.jpg',
            'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/tUcIQCbjFFjdgfr.jpg',
            'http://n.sinaimg.cn/games/transform/20160722/6sHg-fxuhukz0771063.jpg',
            'http://img4.imgtn.bdimg.com/it/u=1422978104,3773037432&fm=21&gp=0.jpg',
        ]
        dispatch(receiveDetail(imgArray)
    }
}

function receiveDetail(imgArray) {
    return {
        type: 'GET_IMG',
        imgArray,
    }
}
