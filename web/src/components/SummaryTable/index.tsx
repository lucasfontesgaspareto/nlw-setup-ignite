import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'
import { api } from '../../lib/axios'
import { weekDays } from '../../utils/constants'
import { generateDatesFromYearBeginning } from '../../utils/generate-dates-from-year-beginning'
import SummaryItem from '../SummaryItem'
import WeekDay from '../WeekDay'

const summaryDates = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export interface ISummary {
  id: string
  date: string
  completed: number
  amount: number
}

function SummaryTable() {
  const [summary, setSummary] = useState<ISummary[]>([])

  const fetchSummary = async () => {
    const res = await api.get<ISummary[]>('/summary')
    setSummary(res.data)
  }

  useEffect(() => {
    fetchSummary()
  }, [])

  return (
    <div className="flex w-full">
      <div className="grid grid-flow-row gap-3 grid-rows-7">
        {weekDays.map((weekDay, index) => (
          <WeekDay label={weekDay} key={index} />
        ))}
      </div>

      <div className="grid grid-flow-col gap-3 grid-rows-7">
        {summaryDates.map((date) => {
          const dayInSummary = summary.find((day) => {
            return dayjs(date).isSame(day.date, 'day')
          })

          return (
            <SummaryItem
              key={date.toString()}
              date={date}
              amount={dayInSummary?.amount}
              completed={dayInSummary?.completed}
            />
          )
        })}
        {Array.from({ length: amountOfDaysToFill }).map((_, index) => (
          <SummaryItem key={index} future />
        ))}
      </div>
    </div>
  )
}

export default SummaryTable
