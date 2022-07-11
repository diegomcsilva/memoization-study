import React, {memo} from 'react'
import styles from './../../../styles/Home.module.css'

const ChildWithMemoAndProp = ({counter}) => {
  console.log('ChildWithMemoAndProp is Renderesing! ', counter)

  return <div className={styles.box2}>Child With Memo And Prop: {counter}</div>
}

export default memo(ChildWithMemoAndProp)