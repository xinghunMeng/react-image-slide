import { GET_IMG } from '../actions/home'

export default function getImgArr(state = {}, action) {
	switch (action.type) {
		case GET_IMG:
			return Object.assign({}, state, action.imgArray)
		default:
			return state
	}
}
