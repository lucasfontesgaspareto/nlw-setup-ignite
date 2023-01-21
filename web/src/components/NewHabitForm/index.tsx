import { CheckIcon } from '@heroicons/react/24/solid'
import * as Checkbox from '@radix-ui/react-checkbox'

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
  return (
    <form className="flex flex-col w-full mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>
      <input
        type="text"
        id="text"
        placeholder="Ex.: Exercícios, Dormir Bem, etc..."
        className="p-4 mt-3 text-white rounded-lg bg-zinc-800 placeholder:text-zinc-400"
      />

      <label htmlFor="" className="mt-4 font-semibold leading-tight">
        Qual a recorrência?
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map((weekDay) => {
          return (
            <Checkbox.Root
              className="flex items-center gap-3 group"
              key={weekDay}>
              <div className="flex items-center justify-center w-8 h-8 border-2 rounded-lg bg-zinc-900 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
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
        className="flex items-center justify-center gap-3 p-4 mt-6 font-semibold bg-green-600 rounded-lg hover:bg-green-500 ">
        <CheckIcon width={20} className="font-bold" />
        Confirmar
      </button>
    </form>
  )
}

export default NewHabitForm
