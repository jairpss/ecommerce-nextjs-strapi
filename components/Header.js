import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className='contenedor'>
            <div>

            </div>

            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/store">Store</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header