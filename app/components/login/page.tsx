// ...existing code...
import Image from 'next/image';
export default function Page() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "row", // divide verticalmente

            }}
        >
            {/* metade esquerda */}
            <div
                style={{
                    flex: 1,
                    background: "#0F0F0F", // cor da metade esquerda
                    display: "flex",
                    alignItems: "center",     // centra verticalmente
                    justifyContent: "center", // centra horizontalmente dentro da metade esquerda
                    padding: "2rem",
                    borderRight: "3px solid #ffffffff",
                }}
            >
                {/* wrapper relativo para que a duplicata absolute fique atrás da caixa */}
                <div
                    style={{
                        position: "relative",
                        width: 440, // espaço para a duplicata maior
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        marginLeft: 0, // removido deslocamento para centralizar
                    }}
                >
                    {/* duplicata atrás (apenas decoração) - MAIOR que a caixa principal */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            left: 25,
                            top: -15,
                            width: 360, // maior que a caixa principal (360)
                            height: '360px',
                            background: "#0F0F0F",
                            padding: "10em",
                            border: "2px solid #FF9B21",
                            boxShadow: "0 10px 20px #ff9b219d",
                            zIndex: 0,
                            pointerEvents: "none",
                            opacity: 0.95,
                        }}
                    />

                    {/* caixa principal (frente) */}
                    <div
                        style={{
                            width: 360,
                            height: '360px',
                            background: "#0F0F0F",
                            padding: "2em",
                            border: "2px solid #FF9B21",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        <h2 style={{ margin: 0, marginBottom: "1rem", textAlign: "center" }}>
                       Entre na CenouraDesk e
comece a se agendar
                        </h2>


                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: "10px 12px",
                                borderRadius: 30,
                                background: "#94eccfff",
                                color: "#030303ff",
                                border: "none",
                                cursor: "pointer",
                                fontWeight: 600,
                                marginTop: "6rem",
                            }}
                        >
                            Entrar com Google
                        </button>
                       
                    </div>
                </div>
            </div>

            {/* metade direita */}
            <div
                style={{
                    flex: 1,
                    background: "#FF9B21", // cor da metade direita
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end", // imagem alinhada totalmente à direita
                    paddingRight: 0,
                }}
            >
                <Image
                    src="/assets/print.png" // O caminho é relativo à pasta public
                    width={500}
                    height={500}
                    alt="print"
                    style={{ objectFit: "contain", display: "block" }}
                />
            </div>
        </div>


    );

}
// ...existing code...