import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi";
import { useNavigate } from "react-router-dom";
export default function Profile() {

  const {user,Sair} = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className="Profile">
      <div>
        <h3>Seu Email: {user.email}</h3>
        <p>
          Esse sistema foi feito para auxiliar os barbeiros a ter um controle de
          agendamentos de cortes ou outros serviços agendados para o dia.
          Voçe pode adicionar, editar e excluir agendamentos, depois de ter criado seu cadatro na plataforma!
        </p>
        <button onClick={()=> navigate('/Home')}>Voltar</button>
        <button onClick={Sair}>Sair</button>
      </div>
    </div>
  );
}
