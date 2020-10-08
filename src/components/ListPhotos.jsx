import React, { useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../redux/actions'
import Photo from './Photo'

export default function ListPhotos() {
  const dispatch = useDispatch()
  const photos = useSelector(state => state.photos)

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [])

  return (
    <FlatList
      style={styles.ListPhotos}
      data={photos}
      renderItem={({ item }) => <Photo photo={item} />}
      keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
  ListPhotos: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 30
  }
})