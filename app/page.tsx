'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { MeuModal } from './components/ModalSimples'; // Importa o componente modal
import styles from './styles.module.css';

import ChatIcon from '../public/icons/chat';
import YtbIcon from '../public/icons/youtube';
import InstagramIcon from '../public/icons/instagram';
import GitIcon from '../public/icons/github';

import GridContainer from './displayGrid';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Função para rolar suavemente até uma section pelo id
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>

      <button
        className={styles.iconFixed}
        onClick={openModal}
        aria-label="Abrir Chat"
      >
        <ChatIcon />
      </button>

      <main>
        <section className={styles.Section1}>
          <div className={styles.headerWrapper}>
            <div className={styles.brand}>
              <h1>🥕 CenouraDesk</h1>
            </div>

            <nav className={styles.navLinks} aria-label="principal">
              <Link href="/components/login" className={styles.linkCustomizado}>Quero logar</Link>
              <span className={styles.separator}>|</span>
              <Link href="/components/cadastro" className={styles.linkCustomizado}>Criar conta</Link>
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
              <button
                className={styles.ctaBtn}
                onClick={() => scrollToSection('sobre')}
              >
                Conhecer projeto
              </button>
            </div>
          </div>
        </section>

        <section id="sobre">
          <GridContainer />
        </section>

        <section>
        </section>
      </main>
      <footer className={styles.footer}>
        <div>
          <a href="#">
            <YtbIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <GitIcon />
          </a>
        </div>
        <div>
          <p>
            &copy; {new Date().getFullYear()} <strong>CenouraDesk</strong>. Todos os direitos reservados.
          </p>
        </div>
      </footer>


      <MeuModal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <div>
          <h3>Atendimento CenouraDesk</h3>
          <p>Olá! Em que podemos ajudar hoje? Deixe sua mensagem ou dúvida abaixo.</p>
          <textarea
            placeholder="Digite sua mensagem aqui..."
            style={{ width: '100%', minHeight: '100px', padding: '10px', marginTop: '10px', resize: 'none' }}
          />
          <button
            onClick={closeModal}
            style={{ float: 'right', marginTop: '10px', padding: '8px 15px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Enviar e Fechar
          </button>
        </div>
      </MeuModal>
    </div >
  );
}
