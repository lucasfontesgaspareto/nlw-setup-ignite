import React from 'react'
import { View } from 'react-native'
import HabitDay from '../../components/HabitDay'
import Header from '../../components/Header'

function HomeScreen() {
  return (
    <View className="flex-1 bg-dark px-8 pt-16">
      <Header />
      <HabitDay />
    </View>
  )
}

export default HomeScreen
