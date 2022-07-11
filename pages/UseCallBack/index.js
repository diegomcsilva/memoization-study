import React, {useState, useCallback} from 'react'
import ChildWithMemoAndPropWithOutCallback from './components/ChildWithMemoAndPropWithOutCallback'
import ChildWithMemoAndPropWithCallback from './components/ChildWithMemoAndPropWithCallback'
// import styles from '../styles/Home.module.css'

export default function Memo() {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState('')

  const updateCounterFromChild = useCallback(() => setCounter(counter + 1), [counter])

  return (
    <>
      <h1>Hello Memo: {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>+1</button>

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

      {/* Componente with memo */}
      <ChildWithMemoAndPropWithOutCallback counter={counter} updateCounter={() => setCounter(counter + 1)} />

      <ChildWithMemoAndPropWithCallback counter={counter} updateCounter={updateCounterFromChild} />
    </>
  )
}
