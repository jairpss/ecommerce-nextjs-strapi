import Link from 'next/link'
import Image from 'next/image' 
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className='contenedor'>
            <div className={styles.bar}>
                <Link href="/">
                    <Image width={300} height={100} src="/img/logo.svg" alt="logo"/>
                </Link>
    
                <nav className={styles.navegation}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/store">Store</Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header