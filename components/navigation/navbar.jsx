import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import styles from "../../styles/Navbar.module.css";
import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/" >
				Mahmoud Amr
                <img src="./images/img.jpeg" alt="..." className={styles.alchemy_logo} />
                
            </Link>
            <div className={styles.links}>
                <Link href="/" className={styles.navLink}>
                    Home
                </Link>
                <Link href="/about" className={styles.navLink}>
                    About Me
                </Link>
            </div>
            <div className={styles.socialIcons}>
                <a href="https://github.com/mahmoudamr5896" target="_blank" className={styles.iconLink}><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/mahmoudamrhassan/" target="_blank" className={styles.iconLink}><AiFillLinkedin /></a>
                <a href="https://www.facebook.com/mahmoud.amr.9041083/?locale=ar_AR" target="_blank" className={styles.iconLink}><AiFillInstagram /></a>
                <a href="https://www.facebook.com/mahmoud.amr.9041083/?locale=ar_AR" target="_blank" className={styles.iconLink}><AiFillTwitterCircle /></a>
            </div>
        </nav>
    );
}
