import Header from "../../Components/Header";
import { useContext } from "react";
import {AuthContext} from "../../ContextApi";
import {FaTrash} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import './style.css'
export default function ViewRegister() {
    const {agendamentos, Excluir} = useContext(AuthContext)
    const navigation = useNavigate();

    function Delete(uid: string){
        Excluir({uid})
    }

    return (
        <div className="viewRegister">
          <Header/>
            
           
            <div className="renderLista">
                <button onClick={()=> navigation('/home')}>
                    Voltar para home
                </button>
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
    );
}