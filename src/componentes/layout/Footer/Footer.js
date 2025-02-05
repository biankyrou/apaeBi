import React from 'react';
import styles from "./Footer.module.css"

function Footer() {
  
  return (
    <div className={styles.footer}>
      {/*<nav className={styles.navfooter}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button onClick={() =>  scrollToSection("home", closedMenuHeight)}>Home</button>
          </li>
          <li className={styles.item}>
            <button onClick={() =>  scrollToSection("projeto", closedMenuHeight)}>Projeto</button>
          </li>
          <li className={styles.item}>
            <button onClick(() =>  scrollToSection("turmas", closedMenuHeight)}>Turmas</button>
          </li>
          <li className={styles.item}>
            <button onClick={() => scrollToSection("equipe", closedMenuHeight)}>Equipe</button>
          </li>
          <li className={styles.item}>
            <button onClick={() => scrollToSection("acoes", closedMenuHeight)}>Ações</button>
          </li>
          <li className={styles.item}>
            <button onClick={() => scrollToSection("contato", closedMenuHeight)}>Contato</button>
          </li>
          <li className={styles.item}>
            <button onClick={() => scrollToSection("blog", closedMenuHeight)}>Blog</button>
          </li> 
        </ul>
      </nav> */}
      <div className={styles.textofooter}>
        <p className={styles.paragrafo}>Desenvolvido com ♥ por PET/ADS @ </p>
        <a className={styles.linkifsp} href='https://portais.ifsp.edu.br/scl/'>IFSP São Carlos</a>
      </div>
    </div>
  );
}

export default Footer;