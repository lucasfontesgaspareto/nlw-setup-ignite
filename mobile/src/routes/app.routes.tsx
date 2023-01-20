import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/Home'
import HabitScreen from '../screens/Habit'
import NewHabitScreen from '../screens/NewHabit'

const Stack = createNativeStackNavigator()

function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="habit" component={HabitScreen} />
      <Stack.Screen name="new-habit" component={NewHabitScreen} />
    </Stack.Navigator>
  )
}

export default AppRoutes
