import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../assets/logo.svg'

function Header() {
  const { navigate } = useNavigation()

  return (
    <View className="flex-row items-center justify-between w-full">
      <Logo />

      <TouchableOpacity
        onPress={() => navigate('new-habit')}
        activeOpacity={0.7}
        className="flex-row items-center px-4 border rounded-lg h-11 border-violet-500">
        <Feather name="plus" size={20} color={colors.violet[500]}></Feather>
        <Text className="ml-3 text-base font-semibold text-white">Novo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header
