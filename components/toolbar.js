import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Toolbar.module.css'

function Toolbar() {
    const router = useRouter()
  return (
    <div className={styles.main}>
        <Link href="/">Home</Link>
        <Link href="/feed/1">Feed</Link>
        <Link href="/eom">EOM</Link>
        <Link href="https://www.facebook.com/SanjarFayzullaev99">Facebook</Link>
    </div>
  )
}

export default Toolbar