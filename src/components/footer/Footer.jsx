import React from 'react'
import Image from 'next/image'

import styles from './footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 VebShen. All right Reserved.</div>
      <div className={styles.socials}>
        <Image src="/facebook.png" alt='Facebook account' width={20} height={20} className={styles.social} />
        <Link href='https://github.com/vaibhavbhardwaj201'>
          <Image src="/github.webp" alt='Github account' width={20} height={20} className={styles.social} />
        </Link>
        <Image src="/instagram.png" alt='Instagram account' width={20} height={20} className={styles.social} />
      </div>
    </div>
  )
}

export default Footer