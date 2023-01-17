type HabitProps = {
  completed: number
}

export default function Habit({ completed }: HabitProps) {
  return (
    <div className="flex items-center justify-center w-10 h-10 m-2 text-white rounded bg-zinc-900">{completed}</div>
  )
}
