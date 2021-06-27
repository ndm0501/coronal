import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import BannerHome from '../components/SVGs/BannerHome'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.details}></div>
      <div className={styles.banner}>
        <BannerHome />
      </div>

    </div>
  )
}
