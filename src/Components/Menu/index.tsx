import "./styles.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi";
import {toast} from 'react-toastify'
export default function Menu() {
  const { AddDocument } = useContext(AuthContext);
  const [cliente, setCliente] = useState("");
  const [serviço, setServiço] = useState("");
  const [horario, setHorario] = useState("");
  const [valor, setValor] = useState("");

  async function Add() {
    if(cliente == '' || serviço == '' || horario == '' || valor == ''){
      toast.error('Prencha todos os campos!')
      return;
    }
    AddDocument({ cliente, horario, serviço, valor,uid:"" });
    setCliente("");
    setHorario("");
    setServiço("");
    setValor("");
  }

  return (
    <div className="menu">
      <h2>Adicionar agendamentos</h2>
      

  
        <div>
         
          <input
            placeholder="Nome do cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
          <input
            placeholder="Serviço"
            value={serviço}
            onChange={(e) => setServiço(e.target.value)}
          />
          <input
            placeholder="Horario"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
          <input
            placeholder="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <button onClick={Add}>
            <p>Agendar</p>
          </button>
          
        </div>
      
    </div>
  );
}
