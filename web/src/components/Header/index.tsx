import logoSVG from '../../assets/logo.svg'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid'
import * as Dialog from '@radix-ui/react-dialog'
import NewHabitForm from '../NewHabitForm'

function Header() {
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto">
      <img src={logoSVG} alt="Logo" />

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="flex items-center gap-3 px-6 py-4 font-semibold border rounded-lg border-violet-500 hover:border-violet-300">
          <PlusIcon width={20} className="text-violet-500" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 w-screen h-screen bg-black/80" />
          <Dialog.Content className="absolute w-full max-w-md p-10 text-white -translate-x-1/2 -translate-y-1/2 bg-zinc-900 rounded-2xl top-1/2 left-1/2">
            <Dialog.Title className="text-3xl font-extrabold leading-tight">
              Criar hábito
            </Dialog.Title>
            <Dialog.Description />
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
              <XMarkIcon width={24} aria-label="Fechar"></XMarkIcon>
            </Dialog.Close>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default Header
