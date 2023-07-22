import React from 'react'
import Image from 'next/image'

import styles from './about.module.css'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image 
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt='Banner Image'
          className={styles.img} />
          <div className={styles.imageText}>
            <h1 className={styles.imageTitle}>Front-end Developer</h1>
            <h2 className={styles.imageDesc}>Building User Friendly UI :)</h2>
          </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.items}>
          <h1 className={styles.title}>Who am I?</h1>
          <p className={styles.description}>I will write my description later.</p>
        </div>
        <div className={styles.items}>
          <h1 className={styles.title}>Who I do?</h1>
          <p className={styles.description}>I will write my description later.</p>
          <Button text={'Contact me'} url={'/contact'} />
        </div>
      </div>
    </div>
  )
}

export default About