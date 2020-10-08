import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { useSelector } from 'react-redux'

export default function Single() {
  const singlePhotoURI = useSelector(state => state.singlePhotoURI)

  return (
    <View style={styles.single__photoContainer}>
      <Image
        source={{uri: singlePhotoURI}}
        style={styles.single__photo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  single__photoContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  single__photo: {
    width: '100%',
    minHeight: 325,
    borderRadius: 10
  }
})
