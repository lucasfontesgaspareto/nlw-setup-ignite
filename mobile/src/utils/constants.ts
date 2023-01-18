import { Dimensions } from 'react-native'

export const WEEK_DAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
export const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE =
  Dimensions.get('screen').width / WEEK_DAYS.length -
  (SCREEN_HORIZONTAL_PADDING + 5)
