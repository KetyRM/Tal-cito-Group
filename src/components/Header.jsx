import logo from '../images/logo.png'
import styles from './css/Header.module.css'



export default function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} alt="logo da marca" />
            
        <nav className={styles.nav}>
            <a className={styles.link} href="#">Início</a>
            <a className={styles.link} href="#">Catalogo</a>
            <a className={styles.link_bg} href="#"> <img src="" alt="" />Fale Conosco</a>
        </nav>
        </header>
    )
}

