import React, {memo} from 'react'
import styles from './../../../styles/Home.module.css'

const ChildWithMemoAndPropWithCallback = ({counter, updateCounter}) => {
  console.log('ChildWithMemoAndPropWithCallback is Renderesing! ', counter)

  return <div className={styles.box2}>
    <div>
      Child With Memo And Prop With Callback: {counter}
    </div>
    <button onClick={() => updateCounter()}>Click</button>
  </div>
}

export default memo(ChildWithMemoAndPropWithCallback)