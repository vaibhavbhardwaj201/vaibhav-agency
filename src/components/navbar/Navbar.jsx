"use client"

import Link from 'next/link'
import React from 'react'

import { links } from '@/components/navbar/navbarData'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkmode/DarkModeToggle'

import { signOut, useSession } from 'next-auth/react'



const Navbar = () => {

  const session = useSession()

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>VebShen</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}

        {
          session.status === "authenticated" && 
        (<button className={styles.logoutbtn}
        onClick={signOut}
        >
          Logout
        </button>)
        }
      </div>
    </div>
  )
}

export default Navbar