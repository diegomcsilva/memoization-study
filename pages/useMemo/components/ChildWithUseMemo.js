import React, {memo, useMemo} from 'react'
import styles from './../../../styles/Home.module.css'

const ChildWithOutUseMemo = props => {
  const {counter, setCounter} = props;

  const childNumber = useMemo(() => {
    let output = 0;

    for(let i = 0; i < 1000_000_000; i++) {
      output++;
    }

    return output;
  }, [])

  console.log('ChildWithOutUseMemo is Renderesing!');

  return <div className={styles.box2}>
    <div>
      Child: {childNumber} - {counter}
    </div>
    <button onClick={() => setCounter(counter + 1)}>Click</button>
  </div>
}

export default memo(ChildWithOutUseMemo)