import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './blog.module.css'

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href='/blog/test' className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt='Blog Image'
            width={400}
            height={250}
            className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>This is heading</h1>
          <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, cupiditate delectus labore vitae ullam corporis tenetur cumque culpa soluta voluptatum officiis incidunt a ipsam, dignissimos, repudiandae ipsa facere? Nobis itaque eos quo delectus atque commodi autem blanditiis ex, provident voluptates ullam quidem magnam a, reiciendis vel doloribus maiores iste harum! Voluptatum quo ullam cum ea non repudiandae quasi? Accusantium ipsa doloribus ipsam nemo nam sint, cumque velit veniam vel eum fugiat consectetur expedita earum unde, architecto rem, eveniet deserunt ullam perspiciatis itaque hic mollitia magni culpa molestiae. Culpa, dicta eaque!</p>
        </div>
      </Link>
      <Link href='/blog/test' className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt='Blog Image'
            width={400}
            height={250}
            className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>This is heading</h1>
          <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, cupiditate delectus labore vitae ullam corporis tenetur cumque culpa soluta voluptatum officiis incidunt a ipsam, dignissimos, repudiandae ipsa facere? Nobis itaque eos quo delectus atque commodi autem blanditiis ex, provident voluptates ullam quidem magnam a, reiciendis vel doloribus maiores iste harum! Voluptatum quo ullam cum ea non repudiandae quasi? Accusantium ipsa doloribus ipsam nemo nam sint, cumque velit veniam vel eum fugiat consectetur expedita earum unde, architecto rem, eveniet deserunt ullam perspiciatis itaque hic mollitia magni culpa molestiae. Culpa, dicta eaque!</p>
        </div>
      </Link>
      <Link href='/blog/test' className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt='Blog Image'
            width={400}
            height={250}
            className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>This is heading</h1>
          <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, cupiditate delectus labore vitae ullam corporis tenetur cumque culpa soluta voluptatum officiis incidunt a ipsam, dignissimos, repudiandae ipsa facere? Nobis itaque eos quo delectus atque commodi autem blanditiis ex, provident voluptates ullam quidem magnam a, reiciendis vel doloribus maiores iste harum! Voluptatum quo ullam cum ea non repudiandae quasi? Accusantium ipsa doloribus ipsam nemo nam sint, cumque velit veniam vel eum fugiat consectetur expedita earum unde, architecto rem, eveniet deserunt ullam perspiciatis itaque hic mollitia magni culpa molestiae. Culpa, dicta eaque!</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog