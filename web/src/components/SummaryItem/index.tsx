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
  completed?: number
  amount?: number
}

export interface IPossibleHabit {
  id: string
  title: string
  created_at: string
}

function SummaryItem({
  date,
  future,
  amount = 0,
  completed = 0
}: SummaryItemProps) {
  const completedPercentage = Math.round((completed / amount) * 100)

  const [possibleHabits, setPossibleHabits] = useState<IPossibleHabit[]>([])

  const fetchPossibleHabits = async () => {
    const res = await api.get<IPossibleHabit[]>('/day')
    setPossibleHabits(res.data)
  }

  useEffect(() => {
    fetchPossibleHabits()
  }, [])

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

          <div className="flex flex-col gap-3 mt-6">
            <Checkbox.Root className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-8 h-8 border-2 rounded-lg bg-zinc-900 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                  <CheckIcon width={20} className="text-white" />
                </Checkbox.Indicator>
              </div>
              <span className="text-xl font-semibold leading-tight text-white group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                Beber 2 litros de agua
              </span>
            </Checkbox.Root>
          </div>

          <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default SummaryItem
