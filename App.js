import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet } from 'react-native'

/* react navigation */
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

/* redux store */
import {createStore, applyMiddleware} from 'redux'
import reducer from './src/redux/reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

/* components */
import ListPhotos from './src/components/ListPhotos'
import Single from './src/components/Single'

const store = createStore(reducer, applyMiddleware(thunk))

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.SafeAreaView}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={ListPhotos}
                options={{ title: 'Gallery' }}
              />
              <Stack.Screen
                name="Single"
                component={Single}
                options={{ title: 'Overview' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: "white"/*,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0*/
  }
})
