"use client"

import React, { useEffect, useState } from 'react'

import styles from './dashboard.module.css'

import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { DELETE } from '../api/posts/[id]/route'

const Dashboard = () => {

  // const [data, setData] = useState([])
  // const [error, setError] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     })

  //     if (!res.ok) {
  //       setError(true)
  //     }

  //     const data = await res.json()

  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])
  

  const session = useSession()
  const router = useRouter()

  // console.log(session);

  const fetcher = (...args) => fetch(...args).then(res => res.json())


  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value
    const image = e.target.image.value
    const content = e.target.content.value

    const body = {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        image,
        username: session?.data?.user?.name,
        content
      })
    }

    try {
      await fetch('/api/posts', body)
      mutate()
      e.target.reset()
    } catch (error) {
      console.log(error);
    }

  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE"
      })
      mutate()
    } catch (error) {
      
    }
  }

  if (session.status === "loading") {
    return <p>Loading...</p>
  }

  if (session.status === "unauthenticated") {
    router?.push('/dashboard/login')
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
           {
            data ?
            data?.map(post => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imageContainer}>
                  <Image src={post.image} width={200} height={150} alt='Blog image' className={styles.image} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span className={styles.deleteBtn} onClick={() => handleDelete(post._id)}>X</span>
              </div>
            ))
            : 
            <h2>You don&apos;t have any blog to show</h2>
           
           }
        </div>
        <form className={styles.createPosts} onSubmit={handleSubmit}>
          <h1>Add new Post</h1>
          <input type="text" name='title' placeholder='Title' className={styles.input} />
          <input type="text" name='description' placeholder='Description' className={styles.input} />
          <input type="text" name='image' placeholder='Image URL' className={styles.input} />
          <textarea placeholder='Your Blog here' name='content' className={styles.textarea} cols="30" rows="10"></textarea>
          <button className={styles.btn}>Upload</button>
        </form>
      </div>
      )
    }
}

export default Dashboard