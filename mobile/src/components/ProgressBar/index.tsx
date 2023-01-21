import React from 'react'
import { View } from 'react-native'

type ProgressBarProps = {
  progress?: number
}

function ProgressBar({ progress = 0 }: ProgressBarProps) {
  return (
    <View className="w-full h-3 mt-4 rounded-xl bg-zinc-700">
      <View
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${progress}%` }}></View>
    </View>
  )
}

export default ProgressBar
