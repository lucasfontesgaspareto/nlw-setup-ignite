import { CheckIcon } from '@heroicons/react/24/solid'
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from 'react'
import { api } from '../../lib/axios'

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarda-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

function NewHabitForm() {
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!title || weekDays.length === 0) {
      return
    }

    await api.post('/habits', {
      title,
      weekDays
    })

    setTitle('')
    setWeekDays([])
    alert('Hábito criado com sucesso!')
  }

  const handleToogleWeekDays = (weekDayIndex: number) => {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      )
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex])
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>
      <input
        type="text"
        id="text"
        autoFocus
        value={title}
        placeholder="Ex.: Exercícios, Dormir Bem, etc..."
        className="p-4 mt-3 text-white rounded-lg bg-zinc-800 placeholder:text-zinc-400"
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="" className="mt-4 font-semibold leading-tight">
        Qual a recorrência?
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map((weekDay, index) => {
          return (
            <Checkbox.Root
              onClick={() => handleToogleWeekDays(index)}
              checked={weekDays.includes(index)}
              className="flex items-center gap-3 group"
              key={weekDay}>
              <div className="transition-colors flex items-center justify-center w-8 h-8 border-2 rounded-lg bg-zinc-900 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                  <CheckIcon width={20} className="text-white" />
                </Checkbox.Indicator>
              </div>
              <span className="leading-tight text-white">{weekDay}</span>
            </Checkbox.Root>
          )
        })}
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-3 p-4 mt-6 font-semibold transition-colors bg-green-600 rounded-lg hover:bg-green-500">
        <CheckIcon width={20} className="font-bold" />
        Confirmar
      </button>
    </form>
  )
}

export default NewHabitForm
