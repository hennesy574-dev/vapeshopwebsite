import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    CTG <span className={styles.highlight}>Vape</span>
                </Link>

                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/flavours">Flavours</Link>
                    <Link href="/devices">Devices</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                {/* Admin link removed */}
            </div>
        </nav>
    )
}
