import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import { useContext } from "react";
import {AuthContext} from "../../ContextApi";
import {FaTrash} from 'react-icons/fa'
import './style.css'
export default function Home() {
    const {agendamentos, Excluir} = useContext(AuthContext)

    function Delete(uid: string){
        Excluir({uid})
    }

    return (
        <div className="cont">
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
                     <button onClick={()=> Delete(agendamento.uid)}><FaTrash/></button>
                   </div>
                    )}
               
            </div>
            </div>
        </div>
    );
}