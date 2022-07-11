import styles from './../../../styles/Home.module.css'

const ChildWithOutMemo = () => {
  console.log('ChildWithOutMemo is Renderesing!')

  return <div className={styles.box1}>Child WithOut Memo</div>
}

export default ChildWithOutMemo