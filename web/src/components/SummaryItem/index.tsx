type SummaryItemProps = {
  future?: boolean
}

function SummaryItem({ future }: SummaryItemProps) {
  return (
    <div
      className={`w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg ${
        future ? 'opacity-40 cursor-not-allowed' : ''
      }`}></div>
  )
}

export default SummaryItem
