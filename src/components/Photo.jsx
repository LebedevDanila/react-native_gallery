import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { getSinglePhoto } from '../redux/actions'
import { useDispatch } from 'react-redux'

export default function Photo({ photo }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const openSinglePhoto = (photoURI) => {
    dispatch(getSinglePhoto(photoURI))
    navigation.navigate('Single')
  }

  return (
    <View  style={styles.photo}>
      <View style={styles.photo__top}>
        <View style={styles.photo__user}>
          <Image
            style={styles.photo__thumb}
            source={{uri: photo.user.profile_image.medium}}
          />
          <View>
            <Text style={styles.photo__fullname}>{photo.user.name}</Text>
            <Text style={styles.photo__username}>@{photo.user.username}</Text>
          </View>
        </View>
        <Text style={styles.photo__createdAt}>
          {new Date(photo.created_at).toLocaleDateString()}
        </Text>
      </View>
      
      <TouchableOpacity onPress={() => openSinglePhoto(photo.urls.small)}>
        <View style={styles.photo__imageContainer}>
          <Image
            source={{uri: photo.urls.small}}
            style={styles.photo__image}
          />
        </View>
      </TouchableOpacity>
      {photo.alt_description && <Text style={styles.photo__desc}>{photo.alt_description}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  photo: {
    padding: 15,
    marginBottom: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#e4e4e4',
    borderRadius: 10
  },
  photo__top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 15
  },
  photo__user: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  photo__fullname: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  photo__username: {
    fontSize: 15,
    fontStyle: 'italic'
  },
  photo__thumb: {
    width: 64,
    height: 64,
    marginRight: 13,
    backgroundColor: 'silver',
    borderRadius: 50
  },
  photo__createdAt: {
    fontSize: 15
  },
  photo__imageContainer: {
    flex: 1,
    marginBottom: 15
  },
  photo__image: {
    width: '100%',
    height: 325,
    borderRadius: 10
  },
  photo__desc: {
    fontSize: 18
  }
})