import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href="https://alchemy.com/?a=create-web3-dapp" target="_blank">
                <img src="/cw3d-logo.png" alt="CW3D Logo" />
            </a>
            <a href="/" className={styles.navLink}>
                Home
            </a>
            <a href="/about" className={styles.navLink}>
                About Me
            </a>
            {/* <a href="/resume" className={styles.navLink}>
                Projects
            </a>
            <a href="/resume" className={styles.navLink}>
                My Resume
            </a> */}
			<div className="div3">
    <a style={{color:'white',margin: '10px'}} href="https://github.com/mahmoudamr5896" target="_blank"><AiFillGithub size="3rem" /></a>
    <a style={{color:'white',margin: '10px'}} href="https://www.linkedin.com/in/lordarcadius/"target="_blank"><AiFillLinkedin size="3rem" /></a>
    <a style={{color:'white',margin: '10px'}} href="https://www.instagram.com/lordarcadius"target="_blank"><AiFillInstagram size="3rem" /></a>
    <a style={{color:'white',margin: '10px'}} href="https://www.twitter.com/lordarcadius" ><AiFillTwitterCircle size="3rem" /></a>
  </div>
               {/* <ConnectButton /> */}
        </nav>
    );
}
