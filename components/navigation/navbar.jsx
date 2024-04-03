import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import Link from 'next/link'; // Import Link from Next.js

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
                <img className={styles.alchemy_logo} src="/cw3d-logo.png" alt="Alchemy Logo"></img>
            </a>
            <ul className={styles.navLinks}>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About Me</a></Link></li>
                <li><a href="#connect">Connect</a></li>
            </ul>
            <ConnectButton></ConnectButton>
        </nav>
    );
}
