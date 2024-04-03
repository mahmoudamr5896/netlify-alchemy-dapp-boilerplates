import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img className={styles.alchemy_logo} src="/cw3d-logo.png"></img>
			</a>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				Home
			</a>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
                About Me
		    </a>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
            My resume	
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
