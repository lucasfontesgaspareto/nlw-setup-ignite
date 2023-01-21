import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { DAY_SIZE } from '../../utils/constants'

type HabitDayProps = TouchableOpacityProps & {
  future?: boolean
}

function HabitDay({ future, ...props }: HabitDayProps) {
  return (
    <TouchableOpacity
      {...props}
      className={`bg-zinc-900 rounded-lg border-2 border-zinc-800 m-1 ${
        future ? 'opacity-40' : ''
      }`}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
      disabled={future}
    />
  )
}

export default HabitDay
