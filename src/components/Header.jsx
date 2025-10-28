import logo from '../images/logo.png';
import styles from './css/Header.module.css';
import iconeBranco from '../images/whats_branco.png';
import iconePreto from '../images/whats_preto.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Ícones (npm install lucide-react)

export default function Header() {
  const [icone, setIcone] = useState(iconePreto);
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className={styles.header}>
      <button
        className={styles.hamburguer}
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Menu"
      >
        {menuAberto ? <X size={28} color="#FFFDEF" /> : <Menu size={28} color="#FFFDEF" />}
      </button>

      <img src={logo} alt="logo da marca" className={styles.logo} />

      <nav className={`${styles.nav} ${menuAberto ? styles.ativo : ''}`}>
        <a className={styles.link} href="#">Início</a>
        <a className={styles.link} href="#">Catálogo</a>
        <a
          className={styles.link_bg}
          href="https://wa.me/5511950782152"
          onMouseEnter={() => setIcone(iconeBranco)}
          onMouseLeave={() => setIcone(iconePreto)}
        >
          <img src={icone} alt="ícone do WhatsApp" />
          Fale Conosco
        </a>
      </nav>
    </header>
  );
}
