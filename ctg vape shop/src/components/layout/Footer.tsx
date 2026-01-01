import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <p>&copy; {new Date().getFullYear()} CTG Vape Shop. All rights reserved.</p>
                <p className={styles.sub}>Professional Vaping Solutions in Chittagong</p>
            </div>
        </footer>
    )
}
