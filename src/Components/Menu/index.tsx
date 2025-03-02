import './styles.css'
import { useState } from 'react';
export default function Menu() {
    const [isShow, setShow] = useState(false);



    return (
        <div className="menu">
            <h2>Adicionar agendamentos</h2>
            {isShow ? (
                <p></p>
            ) : (
                <button onClick={() => setShow(true)}>
                    <p>Clique para agendar</p>
                </button>
            )}


            {isShow ? (
                <div>
                    <p>Agendamentos</p>
                    <input placeholder="Nome do cliente" />
                    <input placeholder="Horario" />
                    <button>
                        <p>Agendar</p>
                    </button>
                    <button onClick={() => setShow(false)}>
                        <p>Ocultar area!</p>
                    </button>
                </div>
            ) : (
                <div>
                    <h2></h2>
                </div>
            )}
        </div>
    );
}