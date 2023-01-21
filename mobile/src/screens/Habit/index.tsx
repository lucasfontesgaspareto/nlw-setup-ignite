import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import BackButton from '../../components/BackButton'
import dayjs from 'dayjs'
import ProgressBar from '../../components/ProgressBar'
import Checkbox from '../../components/Checkbox'

type HabitScreenParams = {
  date: string
  amount?: number
  completed?: number
}

function HabitScreen() {
  const routes = useRoute()
  const { date, amount = 0, completed = 0 } = routes.params as HabitScreenParams

  const completedPercentage = Math.round((completed / amount) * 100)

  const parsedDate = dayjs(date)
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')

  return (
    <View className="flex-1 px-8 pt-16 bg-dark">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        <View>
          <BackButton />
          <Text className="mt-6 text-base font-semibold lowercase text-zinc-400">
            {dayOfWeek}
          </Text>
          <Text className="text-3xl font-extrabold text-white">
            {dayAndMonth}
          </Text>
          <ProgressBar progress={completedPercentage} />

          <View className="mt-6">
            <Checkbox title="Beber 2 litros de agua" checked={false}></Checkbox>
            <Checkbox title="Caminhas" checked={true}></Checkbox>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HabitScreen
