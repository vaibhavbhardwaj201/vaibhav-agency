import React from 'react'
import Image from 'next/image'
import {notFound} from 'next/navigation'

import styles from './category.module.css'
import Button from '@/components/ui/button/Button'
import { items } from './data'

const getData = (cat) => {
  const data = items[cat]

  if(data) {
    return data
  }

  return notFound()
}

const Category = ({params}) => {

  const category = params.category[0].toUpperCase() + params.category.slice(1)

  const data = getData(params.category)

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{category}</h1>

      {data.map(item => {
        return (<div className={styles.items} key={item.id}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>{item.title}</h1>
            <p className={styles.description}>{item.desc}</p>
            <Button url='#' text='See More' />
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={item.image}
              alt='Image'
              fill={true}
               />
          </div>
        </div>)
      })}
      
    </div>
  )
}

export default Category