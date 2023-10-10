import React from 'react'
import Image from 'next/image'

import styles from './contact.module.css'
import Button from '@/components/ui/button/Button'

export const metadata = {
  title: 'VebShen | Contact Us',
  description: 'Contact us now',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src='/contact.png'
            alt='Contact Image'
            fill={true}
            className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input} />
          <input type="email" placeholder='Email' className={styles.input} />
          <textarea className={styles.textarea} placeholder='Your message...' cols={30} rows={10}></textarea>
          <Button text='Send Message' url='#' />
        </form>
      </div>
    </div>
  )
}

export default Contact