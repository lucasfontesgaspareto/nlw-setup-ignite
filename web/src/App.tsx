import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()
import Header from './components/Header'
import SummaryTable from './components/SummaryTable'
import clsx from 'clsx'
import { useState } from 'react'
import AuthForm from './components/AuthForm'

export const authState = atom({
  key: 'authState',
  default: null,
  effects_UNSTABLE: [persistAtom]
})

function Login() {
  return <div></div>
}

function App() {
  const [auth, setAuth] = useRecoilState(authState)
  const [panel, setPanel] = useState('login')

  if (!auth) {
    return (
      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="w-full text-4xl font-extrabold text-center">
          Bem vindo ao Habit to life
        </h1>

        <div className="flex mt-12 space-x-12">
          <h2
            onClick={() => setPanel('register')}
            className={clsx('text-xl font-semibold cursor-pointer', {
              'border-b-4 border-violet-500': panel === 'register'
            })}>
            Criar conta
          </h2>
          <h2
            onClick={() => setPanel('login')}
            className={clsx('text-xl font-semibold cursor-pointer', {
              'border-b-4 border-violet-500': panel === 'login'
            })}>
            Fazer login
          </h2>
        </div>

        <div className="w-full max-w-2xl px-6 mt-12">
          <AuthForm panel={panel} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col w-full max-w-5xl gap-16 px-6">
        <a
          href="https://github.com/lucasfontesgaspareto/nlw-setup-ignite"
          target="_blank"
          className="absolute top-12 right-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="#fff"
            viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M84,240a23.9,23.9,0,0,0,24-24V168"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"></path>
            <path
              d="M172,240a23.9,23.9,0,0,1-24-24V168"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"></path>
            <path
              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"></path>
            <path
              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"></path>
            <path
              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"></path>
          </svg>
        </a>
        {auth ? (
          <>
            <button
              onClick={() => setAuth(null)}
              className="text-xl font-semibold underline text-end">
              Encerrar sessão
            </button>
            <Header />
            <SummaryTable />
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  )
}

export default App
