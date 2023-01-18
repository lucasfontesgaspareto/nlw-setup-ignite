import React from 'react'
import { View, Text } from 'react-native'
import HabitDay from '../../components/HabitDay'
import Header from '../../components/Header'
import { DAY_SIZE, WEEK_DAYS } from '../../utils/constants'

function HomeScreen() {
  return (
    <View className="flex-1 bg-dark px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {WEEK_DAYS.map((weekDay, index) => {
          return (
            <Text
              key={`${weekDay}-${index}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: DAY_SIZE }}>
              {weekDay}
            </Text>
          )
        })}
      </View>

      <HabitDay />
    </View>
  )
}

export default HomeScreen
