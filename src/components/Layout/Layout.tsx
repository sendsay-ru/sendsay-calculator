import React from 'react'

import styles from './Layout.module.scss'

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Layout