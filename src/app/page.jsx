import Image from 'next/image'

import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/ui/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <h1 className={styles.title}>Building Digital Products for your Business.</h1>
        <p className={styles.description}>Dedicated To Build your online presence, so that you can focus on your Business.</p>
        <Button text='See my projects' url='/portfolio' />
      </div>
      <div className={styles.itemContainer}>
        <Image src={Hero} alt='Hero Section' className={styles.img} />
      </div>
    </div>
  )
}
