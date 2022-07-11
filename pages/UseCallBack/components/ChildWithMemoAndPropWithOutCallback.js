import React, {memo} from 'react'
import styles from './../../../styles/Home.module.css'

const ChildWithMemoAndPropWithOutCallback = ({counter, updateCounter}) => {
  console.log('ChildWithMemoAndPropWithOutCallback is Renderesing! ', counter)

  return <div className={styles.box2}>
    <div>
      Child With Memo And Prop WithOut Callback: {counter}
    </div>
    <button onClick={() => updateCounter()}>Click</button>
  </div>
}

export default memo(ChildWithMemoAndPropWithOutCallback)