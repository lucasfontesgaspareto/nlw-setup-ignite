import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import ProgressBar from '../ProgressBar'

type SummaryItemProps = {
  future?: boolean
  completed?: number
  amount?: number
}

const completedProggressStyle = {
  0: 'bg-zinc-900',
  25: 'bg-violet-200'
}

function SummaryItem({ future, amount = 0, completed = 0 }: SummaryItemProps) {
  const completedPercentage = Math.round((completed / amount) * 100)

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
          <span className="font-semibold text-zinc-400">segunda-feira</span>
          <span className="mt-1 text-3xl font-bold leading-tight">19/01</span>
          <ProgressBar progress={completedPercentage} />
          <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default SummaryItem
