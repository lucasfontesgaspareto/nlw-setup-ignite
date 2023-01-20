import React from 'react'
import { ScrollView, View } from 'react-native'
import BackButton from '../../components/BackButton'

function NewHabitScreen() {
  return (
    <View className="flex-1 px-8 pt-16 bg-dark">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />
      </ScrollView>
    </View>
  )
}

export default NewHabitScreen
