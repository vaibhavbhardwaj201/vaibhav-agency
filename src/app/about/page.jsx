import React from 'react'
import Image from 'next/image'

import styles from './about.module.css'
import Button from '@/components/ui/button/Button'

export const metadata = {
  title: 'About VebShen',
  description: 'About VebShen Blogging site',
}

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
          <p className={styles.description}>I will write my description later.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt similique autem voluptatum atque, unde officia corrupti quisquam eius exercitationem distinctio laboriosam, expedita dolorum? Rem atque saepe eaque dolores provident ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat illum omnis quod corrupti praesentium consequatur voluptatibus, consequuntur quae veritatis fugit magni quis id enim minus mollitia labore explicabo! Corrupti? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione amet voluptatibus optio quia dolorem animi alias dolorum quisquam, ex commodi nemo obcaecati possimus soluta sed adipisci! Officiis impedit officia ipsam!</p>
          <Button text={'Contact me'} url={'/contact'} />
        </div>
      </div>
    </div>
  )
}

export default About