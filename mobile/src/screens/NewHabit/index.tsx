import React, { useState } from 'react'
import { ScrollView, View, Text, TextInput } from 'react-native'
import BackButton from '../../components/BackButton'
import Checkbox from '../../components/Checkbox'

const availableWeekDays = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarda-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sábado'
]

function NewHabitScreen() {
  const [weekDays, setWeekDays] = useState<number[]>([])

  const handleToggleWeekDay = (weekDayIndex: number) => {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      )
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex])
    }
  }

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

        <Text className="mt-4 mb-3 text-base font-semibold text-white">
          Qual a recorrência?
        </Text>

        {availableWeekDays.map((weekDay, index) => (
          <Checkbox
            onPress={() => handleToggleWeekDay(index)}
            checked={weekDays.includes(index)}
            title={weekDay}
            key={weekDay}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default NewHabitScreen
