import { useState } from "react";
import './style.css'
export default function Login() {
    const [criar, setCriar] = useState(true);
    return (
        <div className="conteiner">
            {criar ? (
                <div>
                    <h2>Olá, entre na sua conta</h2>
                    <input placeholder="Email" />
                    <input placeholder="*****" />
                    <button>
                        <p>Entrar</p>
                    </button>
                    <button onClick={() => setCriar(false)}>
                        <p>Criar conta!</p>
                    </button>
                </div>
            ) : (
                <div>
                    <h2>Criar conta</h2>
                    <input placeholder="Nome" />
                    <input placeholder="Email" />
                    <input placeholder="*****" />
                    <button>
                        <p>Criar conta!</p>
                    </button>
                    <button onClick={() => setCriar(true)}>
                        <p>Voltar</p>
                    </button>
                </div>
            )}
            <div>
                <img src="https://media.gettyimages.com/id/915640558/pt/foto/close-up-of-hairstylists-hands-cutting-strand-of-mans-hair.jpg?s=612x612&w=0&k=20&c=-Ft8SRAJsn42JdEH-lHhs0snVSwwfIzyoTppcmXMkmg=" />
            </div>
        </div>
    );
}
