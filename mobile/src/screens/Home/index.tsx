import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import HabitDay from '../../components/HabitDay'
import Header from '../../components/Header'

import { DAY_SIZE, WEEK_DAYS } from '../../utils/constants'
import { generateDatesFromYearBeginning } from '../../utils/generate-dates-from-year-beginning'

const datesFromYearStart = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 5
const amountOfDaysToFill = minimumSummaryDatesSize - WEEK_DAYS.length

function HomeScreen() {
  const { navigate } = useNavigation()

  return (
    <View className="flex-1 px-8 pt-16 bg-dark">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {WEEK_DAYS.map((weekDay, index) => {
          return (
            <Text
              key={`${weekDay}-${index}`}
              className="mx-1 text-xl font-bold text-center text-zinc-400"
              style={{ width: DAY_SIZE }}>
              {weekDay}
            </Text>
          )
        })}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date) => {
            return (
              <HabitDay
                onPress={() => navigate('habit', { date: date.toISOString() })}
                key={date.toISOString()}
              />
            )
          })}
          {Array.from({ length: amountOfDaysToFill }).map((_, index) => {
            return <HabitDay key={index} future />
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
