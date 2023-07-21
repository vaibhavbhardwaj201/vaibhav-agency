import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.texts}>
        <h1></h1>
        <p></p>
        <button></button>
      </div>
      <div className={styles.image}></div>
    </div>
  )
}
