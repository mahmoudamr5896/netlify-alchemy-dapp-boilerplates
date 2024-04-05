import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href="https://alchemy.com/?a=create-web3-dapp" target="_blank">
				Mahmoud Amr
                {/* <img src="/cw3d-logo.png" alt="CW3D Logo" className={styles.alchemy_logo} /> */}
            </a>
            <div className={styles.links}>
                <a href="/" className={styles.navLink}>
                    Home
                </a>
                <a href="/about" className={styles.navLink}>
                    About Me
                </a>
            </div>
            <div className={styles.socialIcons}>
                <a href="https://github.com/mahmoudamr5896" target="_blank" className={styles.iconLink}><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/lordarcadius/" target="_blank" className={styles.iconLink}><AiFillLinkedin /></a>
                <a href="https://www.instagram.com/lordarcadius" target="_blank" className={styles.iconLink}><AiFillInstagram /></a>
                <a href="https://www.twitter.com/lordarcadius" className={styles.iconLink}><AiFillTwitterCircle /></a>
            </div>
        </nav>
    );
}
