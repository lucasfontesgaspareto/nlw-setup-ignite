import logoSVG from './assets/logo.svg'
import { PlusIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex justify-between items-center">
      <img src={logoSVG} alt="Logo" />
      <button
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300">
        <PlusIcon width={20} className="text-violet-500" />
        novo habito
      </button>
    </div>
  )
}

export default Header
