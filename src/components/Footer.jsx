import logotipo from '../images/logotipo_footer.png';
import instagram from '../images/instagram.png';
import styles from './css/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <img src={logotipo} alt="Logotipo da empresa" />
        </div>

        <div className={styles.naveg}>
            <h1 className={styles.titulo}>MAPA DO SITE</h1>
            <h2>Início</h2>
            <h2>Catalogo</h2>
        </div>

        <div className={styles.contato}>
          <h1 className={styles.titulo}>CONTATOS</h1>
          
          <h2>(11) 95078-2152</h2>

          <div className={styles.cont}>
             <img src={instagram} alt="Instagram da empresa" />
          <p>@TalacitoGroup</p>
          </div>
         
        </div>

      </div>

         <div>
            <p> Todos os direitos reservados © Copyright 2025  </p>
        </div>

    </footer>
  );
}
