import styles from './styles.module.css';


export default function GridContainer() {
    return (
        <div className={styles.gridContainer}>
            <div className={`${styles.gridItem} ${styles.boxA}`}>
                <p>
                    <strong>CenouraDesk:</strong> A Agenda Inteligente que Tira a Complicação da Sua Mão. Concentre-se no seu talento e deixe a gestão de agendamentos e faltas por conta da nossa tecnologia.
                </p>
                <p><strong>Maximize Cada Cadeira. Maximize Seu Lucro.</strong> Plataforma completa para salões e barbearias: mais agendamentos, menos "no-shows" e controle financeiro total. Comece a lucrar mais hoje.</p>
            </div>

            <div className={`${styles.gridItem} ${styles.boxB}`}>
                <p>
                    <strong>A Experiência do Cliente Começa Antes da Porta.</strong> Ofereça agendamento online impecável, lembretes automáticos e a gestão mais fluida do mercado. Clientes satisfeitos, agenda lotada.
                </p>
            </div>

            <div className={`${styles.gridItem} ${styles.boxC}`}>
                <span>
                    <p>
                        1. Sobre Lembretes e Redução de Faltas (No-Show)
                        O Fim dos "Me Esqueci" Reduza em até 80% as ausências com nosso sistema de lembretes automáticos e inteligentes, integrados via WhatsApp e SMS. Garanta que todas as cadeiras do seu salão estejam sempre ocupadas.
                    </p>

                    <p>
                        2. Sobre Gestão de Dados e Decisão
                        Dados em Tempo Real, Decisões Precisas Pare de chutar. CenouraDesk fornece relatórios detalhados sobre faturamento por serviço, desempenho de cada profissional e horários de pico. Tenha em mãos o mapa exato para expandir seu negócio.
                    </p>

                    <p>
                        3. Sobre Agendamento Online
                        Seu Salão Abre 24 Horas Online Seus clientes agendam o serviço que querem, com o profissional que preferem, a qualquer momento, mesmo de madrugada. Você acorda com a agenda já organizada e preenchida.
                    </p>
                </span>
            </div>
        </div>
    );
}