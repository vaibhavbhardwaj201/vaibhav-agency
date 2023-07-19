"use client"

import Link from 'next/link'
import React from 'react'

import { links } from '@/utils/navbarData'
import styles from './navbar.module.css'



const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>VebShen</Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        <button className={styles.logoutbtn}
        onClick={() => {
          console.log("Logged out");
        }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar