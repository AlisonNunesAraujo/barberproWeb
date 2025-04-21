import "./styles.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const { AddDocument, loading } = useContext(AuthContext);
  const navigation = useNavigate();
  const [cliente, setCliente] = useState("");
  const [serviço, setServiço] = useState("");
  const [horario, setHorario] = useState("");
  const [valor, setValor] = useState("");

  async function Add() {
    if (cliente == "" || serviço == "" || horario == "" || valor == "") {
      toast.error("Prencha todos os campos!");
      return;
    }
    AddDocument({ cliente, horario, serviço, valor, uid: "" });
    setCliente("");
    setHorario("");
    setServiço("");
    setValor("");
  }

  return (
    <div className="menu">
      <div>
        <h2>Adicionar agendamentos</h2>
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
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button onClick={Add}>
          {loading ? <p>Carregando</p> : <p>Agendar</p>}
        </button>

        <button onClick={() => navigation("/home")}>
          <p>Voltar para Home</p>
        </button>
      </div>
    </div>
  );
}
