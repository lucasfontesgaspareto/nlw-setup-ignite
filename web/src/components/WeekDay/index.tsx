type WeekDayProps = {
  label: string
}

function WeekDay({ label }: WeekDayProps) {
  return (
    <div className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold">
      {label}
    </div>
  )
}

export default WeekDay
