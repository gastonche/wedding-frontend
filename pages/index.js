import styles from '../styles/Home.module.css'
import SearchBox from '../components/SearchBox';


export default function Home() {
  return (
    <div className={styles.container}>
      <SearchBox />
    </div>
  )
}
