import {useState} from 'react'
import ChildWithOutUseMemo from './components/ChildWithOutUseMemo'
import ChildWithUseMemo from './components/ChildWithUseMemo'
// import styles from '../styles/Home.module.css'

export default function Memo() {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState('')

  return (
    <>
      <h1>Hello useMemo: {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>+1</button>

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

      {/* Componente with useMemo*/}
      <ChildWithUseMemo counter={counter} setCounter={setCounter} />

      {/* Componente with out useMemo*/}
      {/* <ChildWithOutUseMemo counter={counter} setCounter={setCounter} /> */}
    </>
  )
}
