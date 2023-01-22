import { CheckIcon } from '@heroicons/react/24/solid'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { api } from '../../lib/axios'
import ProgressBar from '../ProgressBar'

type SummaryItemProps = {
  date?: Date
  future?: boolean
  defaultCompleted?: number
  amount?: number
}

export interface IPossibleHabit {
  id: string
  title: string
  created_at: string
}
export interface IDay {
  completedHabits: string[]
  possibleHabits: IPossibleHabit[]
}

type HabitListProps = {
  date: string
  onCompletedChange(completedHabits: number): void
}

function HabitList({ date, onCompletedChange }: HabitListProps) {
  const [possibleHabits, setPossibleHabits] = useState<IPossibleHabit[]>([])
  const [completedHabits, setCompletedHabits] = useState<string[]>([])

  const fetchPossibleHabits = async () => {
    const res = await api.get<IDay>('/day', {
      params: {
        date
      }
    })

    if (res.data) {
      setPossibleHabits(res.data.possibleHabits)
      setCompletedHabits(res.data.completedHabits)
    }
  }

  const isPast = dayjs(date).endOf('day').isBefore(new Date())

  const handleToggleHabit = async (habitId: string) => {
    await api.patch(`/habits/${habitId}/toggle`)

    const isHabitAlreadyCompleted = completedHabits?.includes(habitId)

    if (isHabitAlreadyCompleted) {
      setCompletedHabits((prevState) =>
        prevState.filter((id) => id !== habitId)
      )
    } else {
      setCompletedHabits((prevState) => prevState.concat(habitId))
    }
  }

  useEffect(() => {
    fetchPossibleHabits()
  }, [])

  useEffect(() => {
    onCompletedChange(completedHabits?.length || 0)
  }, [completedHabits])

  return (
    <div className="flex flex-col gap-3 mt-6">
      {possibleHabits?.map((possibleHabit) => {
        return (
          <Checkbox.Root
            key={possibleHabit.id}
            onCheckedChange={() => handleToggleHabit(possibleHabit.id)}
            disabled={isPast}
            checked={completedHabits?.includes(possibleHabit.id)}
            className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-8 h-8 border-2 rounded-lg bg-zinc-900 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
              <Checkbox.Indicator>
                <CheckIcon width={20} className="text-white" />
              </Checkbox.Indicator>
            </div>
            <span className="text-xl font-semibold leading-tight text-white group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
              {possibleHabit.title}
            </span>
          </Checkbox.Root>
        )
      })}
    </div>
  )
}

function SummaryItem({
  date,
  future,
  amount = 0,
  defaultCompleted = 0
}: SummaryItemProps) {
  const [completed, setComleted] = useState(defaultCompleted)

  const completedPercentage = Math.round((completed / amount) * 100)

  function handleCompletedChange(completedHabits: number) {
    setComleted(completedHabits)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        disabled={future}
        className={clsx(
          `w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg `,
          {
            'cursor-pointer': !future,
            'opacity-40 cursor-not-allowed': future,
            'bg-violet-500 border-violet-400': completedPercentage >= 80,
            'bg-violet-600 border-violet-500':
              completedPercentage >= 60 && completedPercentage < 80,
            'bg-violet-700 border-violet-500':
              completedPercentage >= 40 && completedPercentage < 60,
            'bg-violet-800 border-violet-600':
              completedPercentage >= 20 && completedPercentage < 40,
            'bg-violet-900 border-violet-700':
              completedPercentage > 0 && completedPercentage < 20,
            'bg-zinc-900 border-zinc-800': completedPercentage === 0
          }
        )}></Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">
            {dayjs(date).format('dddd')}
          </span>
          <span className="mt-1 text-3xl font-bold leading-tight">
            {dayjs(date).format('DD/MM')}
          </span>

          <ProgressBar progress={completedPercentage} />

          <HabitList
            date={date?.toISOString()!}
            onCompletedChange={handleCompletedChange}
          />

          <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default SummaryItem
