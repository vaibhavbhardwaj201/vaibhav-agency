import React from 'react'
import Image from 'next/image'

import styles from './category.module.css'
import Button from '@/components/button/Button'

const Category = ({params}) => {

  const category = params.category[0].toUpperCase() + params.category.slice(1)

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{category}</h1>
      <div className={styles.items}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Heading</h1>
          <p className={styles.description}>This is paragraph</p>
          <Button url='#' text='See More' />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt='Image'
            fill={true} />
        </div>
      </div>
    </div>
  )
}

export default Category