"use client"

import React from 'react'

import styles from './darkmode.module.css'
import { useThemeContext } from '@/context/ThemeContext'

const DarkModeToggle = () => {

  const { toggleTheme, mode } = useThemeContext()

  // const mode = "dark"
  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }} />
    </div>
  )
}

export default DarkModeToggle