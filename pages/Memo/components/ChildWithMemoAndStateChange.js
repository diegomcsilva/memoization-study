import React, {memo, useState} from 'react'
import styles from './../../../styles/Home.module.css'

// Se o seu componente de função envolvido em React.memo 
// tiver um useState, useReducer ou useContext Hook em sua implementação, 
// ele ainda será renderizado quando o estado ou o contexto mudar.

const ChildWithMemoAndStateChange = () => {
  const [state, setState] = useState('inicial')

  console.log('ChildWithMemoAndStateChange is Renderesing! ', state)

  return <>
    <div className={styles.box2}>Child With Memo And Prop: {state}</div>
    <button onClick={() => setState('final!')}>Change</button>
  </>
}

export default memo(ChildWithMemoAndStateChange)