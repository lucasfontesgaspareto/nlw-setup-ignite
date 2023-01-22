import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import BackButton from '../../components/BackButton'
import dayjs from 'dayjs'
import ProgressBar from '../../components/ProgressBar'
import Checkbox from '../../components/Checkbox'
import { generateProgressPercentage } from '../../utils/generate-progress-percentage'
import { api } from '../../lib/axios'
import { Loading } from '../../components/Loading'

type HabitScreenParams = {
  date: string
  amount?: number
  completed?: number
}

export interface IPossibleHabit {
  id: string
  title: string
  created_at: string
}
export interface IDay {
  completedHabits: string[]
  possibleHabits: IPossibleHabit[]
}

function HabitScreen() {
  const routes = useRoute()
  const { date, amount, completed } = routes.params as HabitScreenParams

  const completedPercentage = generateProgressPercentage(amount, completed)

  const parsedDate = dayjs(date)
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')

  const [possibleHabits, setPossibleHabits] = useState<IPossibleHabit[]>([])
  const [completedHabits, setCompletedHabits] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPossibleHabits = async () => {
    try {
      const res = await api.get<IDay>('/day', {
        params: {
          date
        }
      })

      if (res.data) {
        setPossibleHabits(res.data.possibleHabits)
        setCompletedHabits(res.data.completedHabits)
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  const isPast = dayjs(date).endOf('day').isBefore(new Date())

  const handleToggleHabit = async (habitId: string) => {
    await api.patch(`/habits/${habitId}/toggle`)

    const isHabitAlreadyCompleted = completedHabits?.includes(habitId)

    if (isHabitAlreadyCompleted) {
      setCompletedHabits((prevState) =>
        prevState.filter((id) => id !== habitId)
      )
    } else {
      setCompletedHabits((prevState) => prevState.concat(habitId))
    }
  }

  useEffect(() => {
    fetchPossibleHabits()
  }, [])

  if (loading) {
    return <Loading />
  }

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
            {possibleHabits?.map((habit) => {
              return (
                <Checkbox
                  disabled={isPast}
                  key={habit.id}
                  title={habit.title}
                  onPress={() => handleToggleHabit(habit.id)}
                  checked={completedHabits.includes(habit.id)}></Checkbox>
              )
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HabitScreen
