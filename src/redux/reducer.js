import { FETCH_PHOTOS, GET_SINGLE_PHOTO } from "./types"

const initalState = {
	photos: [],
	singlePhotoURI: ''
}

export default function reducer(state = initalState, action) {
	switch(action.type) {
		case FETCH_PHOTOS:
			return {
				...state,
				photos: action.photos
			}
		case GET_SINGLE_PHOTO:
			return {
				...state,
				singlePhotoURI: action.photoURI
			}
		default:
			return state
	}
}