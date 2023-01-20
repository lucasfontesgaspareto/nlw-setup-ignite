import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import AppRoutes from './app.routes'

function Routes() {
  return (
    <View className="flex-1 bg-dark">
      <NavigationContainer>
        <AppRoutes></AppRoutes>
      </NavigationContainer>
    </View>
  )
}

export default Routes
