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
