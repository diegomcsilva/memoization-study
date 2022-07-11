import React, {memo} from 'react'
import styles from './../../../styles/Home.module.css'

const ChildWithMemo = () => {
  console.log('ChildWithMemo is Renderesing!')

  return <div className={styles.box2}>Child With Memo</div>
}

export default memo(ChildWithMemo)