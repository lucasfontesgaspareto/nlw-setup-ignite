import React from 'react'
import { ScrollView, View, Text, TextInput } from 'react-native'
import BackButton from '../../components/BackButton'

function NewHabitScreen() {
  return (
    <View className="flex-1 px-8 pt-16 bg-dark">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />
        <Text className="mt-6 text-3xl font-extrabold text-white">
          Criar Hábito
        </Text>
        <Text className="mt-6 text-base font-semibold text-white">
          Qual seu comprometimento?
        </Text>

        <TextInput className="h-12 pl-4 mt-3 text-white rounded-lg bg-zinc-800 focus:border-2 focus:border-green-600" />
      </ScrollView>
    </View>
  )
}

export default NewHabitScreen
