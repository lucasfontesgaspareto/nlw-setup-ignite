import { CheckIcon } from '@heroicons/react/24/solid'

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
