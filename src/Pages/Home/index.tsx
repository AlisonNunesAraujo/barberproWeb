import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import { useContext } from "react";
import {AuthContext} from "../../ContextApi";

import './style.css'
export default function Home() {
    const {agendamentos, Excluir} = useContext(AuthContext)

    function Delete(uid: string){
        Excluir({uid})
    }

    return (
        <div>
            <Header />
            <div className="conteudo">
            <Menu />
            <div className="renderLista">
                <h2>Agendamentos</h2>
               
                {agendamentos.map((agendamento) => 
                   <div className="agendados">
                     <p>Nome: {agendamento.cliente}</p>
                     <p>Horario: {agendamento.horario}</p>
                     <p>Serviço: {agendamento.serviço}</p>
                     <p>Valor: R${agendamento.valor}</p>
                     <button onClick={()=> Delete(agendamento.uid)}>Excluir</button>
                   </div>
                    )}
               
            </div>
            </div>
        </div>
    );
}