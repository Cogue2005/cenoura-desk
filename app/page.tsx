import Link from "next/link";
import "./globals.css";
import styles from './MeuLink.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <section className={styles.Section1}>
          <div className={styles.headerWrapper}>
            <div className={styles.brand}>
              <h1>🥕 CenouraDesk</h1>
            </div>

            <nav className={styles.navLinks} aria-label="principal">
              <Link href="#" className={styles.linkCustomizado}>Quero logar</Link>
              <span className={styles.separator}>|</span>
              <Link href="#" className={styles.linkCustomizado}>Criar conta</Link>
            </nav>
          </div>

          <div className={styles.hero}>
            <p className={styles.heroText}>
              Plataforma que transforma seus agendamentos em crescimento, sem complicação.
            </p>
            <p className={styles.subText}>
              A gestão de agendamentos e vendas definitiva para seu salão ou barbearia.
            </p>

            <div className={styles.cta}>
              <button className={styles.ctaBtn}>Conhecer projeto</button>
            </div>
          </div>
        </section>

        <section id="sobre"></section>
      </main>
    </div >
  );
}
