import Habit from "./components/Habit"

function App() {
  return (
    <>
      <Habit completed={3}/>
      <Habit completed={1}/>
      <Habit completed={0}/>
    </>
  )
}

export default App
