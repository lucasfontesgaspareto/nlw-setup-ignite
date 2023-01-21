import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import BackButton from '../../components/BackButton'
import dayjs from 'dayjs'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import ProgressBar from '../../components/ProgressBar'

type HabitScreenParams = {
  date: string
}

function HabitScreen() {
  const routes = useRoute()
  const { date } = routes.params as HabitScreenParams

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
          <ProgressBar progress={75} />
        </View>
      </ScrollView>
    </View>
  )
}

export default HabitScreen
