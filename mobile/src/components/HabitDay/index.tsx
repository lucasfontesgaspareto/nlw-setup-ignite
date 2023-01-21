import clsx from 'clsx'
import dayjs from 'dayjs'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { DAY_SIZE } from '../../utils/constants'
import { generateProgressPercentage } from '../../utils/generate-progress-percentage'

type HabitDayProps = TouchableOpacityProps & {
  date?: Date
  future?: boolean
  amount?: number
  completed?: number
}

function HabitDay({
  date,
  future,
  amount,
  completed,
  ...props
}: HabitDayProps) {
  const completedPercentage = generateProgressPercentage(amount, completed)
  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  return (
    <TouchableOpacity
      {...props}
      className={clsx('rounded-lg border-2 m-1', {
        'opacity-40': future,
        'bg-violet-500 border-violet-400': completedPercentage >= 80,
        'bg-violet-600 border-violet-500':
          completedPercentage >= 60 && completedPercentage < 80,
        'bg-violet-700 border-violet-500':
          completedPercentage >= 40 && completedPercentage < 60,
        'bg-violet-800 border-violet-600':
          completedPercentage >= 20 && completedPercentage < 40,
        'bg-violet-900 border-violet-700':
          completedPercentage > 0 && completedPercentage < 20,
        'bg-zinc-900 border-zinc-800': completedPercentage === 0,
        'border-white border-4': isCurrentDay
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
      disabled={future}
    />
  )
}

export default HabitDay
