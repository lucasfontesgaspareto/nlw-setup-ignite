import { CheckIcon } from '@heroicons/react/24/solid'
import { FormEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { authState } from '../../App'
import { api } from '../../lib/axios'

type AuthFormProps = {
  panel: string
}

function AuthForm({ panel }: AuthFormProps) {
  const setAuth = useSetRecoilState(authState)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!username || !password) {
      return
    }

    const res = await api.post(panel === 'login' ? '/signin' : '/signup', {
      username,
      password
    })

    setAuth(res.data.token)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <label htmlFor="username" className="font-semibold leading-tight">
        Nome do usuário
      </label>
      <input
        type="text"
        id="username"
        autoFocus
        value={username}
        placeholder="devgaspa"
        className="p-4 mt-3 text-white rounded-lg bg-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
        onChange={(event) => setUsername(event.target.value)}
      />

      <label htmlFor="password" className="mt-6 font-semibold leading-tight">
        Senha
      </label>
      <input
        type="password"
        id="password"
        autoFocus
        value={password}
        placeholder="*******"
        className="p-4 mt-3 text-white rounded-lg bg-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        type="submit"
        className="flex items-center justify-center gap-3 p-4 mt-6 font-semibold transition-colors bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900">
        <CheckIcon width={20} className="font-bold" />
        Entrar
      </button>
    </form>
  )
}

export default AuthForm
