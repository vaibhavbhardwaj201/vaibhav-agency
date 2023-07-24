import React from 'react'

import styles from './portfolio.module.css'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className={styles.layoutTitle}>My Works</h1>
        {children}
    </div>
  )
}

export default Layout