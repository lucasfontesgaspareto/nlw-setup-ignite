import React, { useState } from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import BackButton from '../../components/BackButton'
import Checkbox from '../../components/Checkbox'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { api } from '../../lib/axios'

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
  const [title, setTitle] = useState('')
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

  const handleSubmit = async () => {
    if (!title || weekDays.length === 0) {
      Alert.alert(
        'Atenção',
        'Informe um nome e ao menos um dia de recorrência.'
      )
      return
    }

    await api.post('/habits', {
      title,
      weekDays
    })

    setTitle('')
    setWeekDays([])

    Alert.alert('Parabéns', 'Hábito criado com sucesso!')
  }

  return (
    <View className="flex-1 px-8 pt-16 bg-dark">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>
        <BackButton />
        <Text className="mt-6 text-3xl font-extrabold text-white">
          Criar Hábito
        </Text>
        <Text className="mt-6 text-base font-semibold text-white">
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 mt-3 text-white border-2 rounded-lg bg-zinc-900 border-zinc-800 focus:border-green-600 "
          placeholderTextColor={colors.zinc[400]}
          placeholder="Exercícios, dormir bem, etc..."
          value={title}
          onChangeText={setTitle}
        />

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

        <TouchableOpacity
          onPress={handleSubmit}
          className="flex-row items-center justify-center w-full mt-6 bg-green-600 rounded-md h-14"
          activeOpacity={0.7}>
          <Feather name="check" color={colors.white} size={20}></Feather>
          <Text className="ml-2 text-base font-semibold text-white">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default NewHabitScreen
