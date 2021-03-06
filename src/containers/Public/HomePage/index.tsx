import React from 'react'
import Header from 'components/Header'
import styles from './styles.module.scss'
import DraggbleList from '../DraggbleList/index'
import DragbleTwoList from '../DraggbleTwoList'
import DraggbleTwoInfinity from '../DraggbleTwoInfinity/index'
import DraggbleDelivery from '../DraggbleDelivery'

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <h2 className={styles.title}>Food delivery</h2>
      {/* <DraggbleList /> */}
      {/* <DragbleTwoList /> */}
      {/* <DraggbleTwoInfinity /> */}
      <DraggbleDelivery />
    </div>
  )
}

export default HomePage
