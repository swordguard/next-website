import Header from '../components/Header/Header'
import HomePage from '../components/HomePage/HomePage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HomePage />
    </div>
  )
}
