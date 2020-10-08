import { FETCH_PHOTOS, GET_SINGLE_PHOTO } from "./types"

export function fetchPhotos() {
  return async (dispatch) => {
    const res = await fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
    const photos = await res.json()

    await dispatch({
      type: FETCH_PHOTOS,
      photos
    })
  }
}

export const getSinglePhoto = (photoURI) => ({
  type: GET_SINGLE_PHOTO,
  photoURI
})