import {useState} from 'react'
import Child from './components/ChildWithOutMemo'
import ChildWithMemo from './components/ChildWithMemo'
import ChildWithMemoAndProp from './components/ChildWithMemoAndProp'
import ChildWithMemoAndStateChange from './components/ChildWithMemoAndStateChange'
// import styles from '../styles/Home.module.css'

export default function Memo() {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState('')

  return (
    <>
      <h1>Hello Memo: {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>+1</button>

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      
      {/* Componente without memo */}
      {/* <Child /> */}

      {/* Componente with memo */}
      {/* <ChildWithMemo /> */}

      {/* Componente with memo and prop*/}
      <ChildWithMemoAndProp counter={counter} />

      {/* Componente with memo and state change*/}
      {/* <ChildWithMemoAndStateChange /> */}
    </>
  )
}
