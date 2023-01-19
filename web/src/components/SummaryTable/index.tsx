import { weekDays } from '../../utils/constants'
import { generateDatesFromYearBeginning } from '../../utils/generate-dates-from-year-beginning'
import SummaryItem from '../SummaryItem'
import WeekDay from '../WeekDay'

const summaryDates = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

function SummaryTable() {
  return (
    <div className="flex w-full">
      <div className="grid grid-flow-row gap-3 grid-rows-7">
        {weekDays.map((weekDay, index) => (
          <WeekDay label={weekDay} key={index} />
        ))}
      </div>

      <div className="grid grid-flow-col gap-3 grid-rows-7">
        {summaryDates.map((date) => (
          <SummaryItem
            key={date.toString()}
            amount={5}
            completed={Math.random() * 5}
          />
        ))}
        {Array.from({ length: amountOfDaysToFill }).map((_, index) => (
          <SummaryItem key={index} future />
        ))}
      </div>
    </div>
  )
}

export default SummaryTable
