import React, { useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

type ProgressBarProps = {
  progress?: number
}

function ProgressBar({ progress = 0 }: ProgressBarProps) {
  const sharedProgress = useSharedValue(progress)

  const style = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`
    }
  })

  useEffect(() => {
    sharedProgress.value = withTiming(progress)
  }, [progress])

  return (
    <View className="w-full h-3 mt-4 rounded-xl bg-zinc-700">
      <Animated.View
        className="h-3 rounded-xl bg-violet-600"
        style={style}></Animated.View>
    </View>
  )
}

export default ProgressBar
