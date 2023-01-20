import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { useNavigation } from '@react-navigation/native'

function BackButton() {
  const { goBack } = useNavigation()

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
      <Feather name="arrow-left" size={32} color={colors.zinc[400]}></Feather>
    </TouchableOpacity>
  )
}

export default BackButton
