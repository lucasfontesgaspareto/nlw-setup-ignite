import * as Popover from '@radix-ui/react-popover'
import ProgressBar from '../ProgressBar'

type SummaryItemProps = {
  future?: boolean
}

function SummaryItem({ future }: SummaryItemProps) {
  return (
    <Popover.Root>
      <Popover.Trigger
        disabled={future}
        className={`w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg ${
          future ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
        }`}></Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">segunda-feira</span>
          <span className="mt-1 text-3xl font-bold leading-tight">19/01</span>
          <ProgressBar progress={75} />
          <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default SummaryItem
