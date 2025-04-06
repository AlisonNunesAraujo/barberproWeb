import Header from "../../Components/Header";
// import { useContext } from "react";
// import {AuthContext} from "../../ContextApi";
import { useNavigate } from "react-router-dom";
import "./style.css";
export default function Home() {
  // const {agendamentos, Excluir} = useContext(AuthContext)
  const navigation = useNavigate();

  return (
    <div className="cont">
      <Header />
      <div className="conteudo">
        <div className="scroll">
          <button onClick={() => navigation("/menu")}>
            <p>Agendar</p>
          </button>

          <button onClick={() => navigation("/ViewRegister")}>
            <p>Ver agendamentos</p>
          </button>
        </div>
      </div>

      <div className="beneficios">
        <div>
          <p>Melhore o sistema de agendamentos da sua barbearia</p>
        </div>
        <div>
          <p>Agilidade para o barbeiro</p>
        </div>
      </div>
    </div>
  );
}
