import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoApp from './components/TodoApp.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
     <TodoApp/>
  )
}

export default App
