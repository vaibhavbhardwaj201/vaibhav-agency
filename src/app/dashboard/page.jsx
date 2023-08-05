"use client"

import React, { useEffect, useState } from 'react'

import styles from './dashboard.module.css'

import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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


  const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

  console.log(data);

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
                  <Image src={post.image} width={200} height={150} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span className={styles.deleteBtn}>X</span>
              </div>
            ))
            : 
            <h2>You don't have any blog to show</h2>
           
           }
        </div>
        <form className={styles.createPosts}></form>
      </div>
      )
    }
}

export default Dashboard